// api/cron/send-notifications.js - Daily cron job to check and send notifications
import { kv } from '@vercel/kv';
import webpush from 'web-push';

// Configure web-push with your VAPID keys
webpush.setVapidDetails(
    'mailto:your-email@example.com',
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
);

export default async function handler(req, res) {
    // Verify this is a cron request (optional security)
    if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        console.log('Starting daily notification check...');

        // Get all user IDs
        const userIds = await kv.smembers('all_users');
        console.log(`Checking ${userIds.length} users for expiring items`);

        let notificationsSent = 0;
        const results = [];

        for (const userId of userIds) {
            try {
                const userData = await kv.get(`user:${userId}`);
                
                if (!userData || !userData.subscription || !userData.items) {
                    continue;
                }

                // Check for items expiring in 1-3 days
                const atRiskItems = getAtRiskItems(userData.items);
                
                if (atRiskItems.length > 0) {
                    await sendNotificationToUser(userData.subscription, atRiskItems);
                    notificationsSent++;
                    
                    results.push({
                        userId,
                        itemsAtRisk: atRiskItems.length,
                        status: 'sent'
                    });
                    
                    console.log(`Notification sent to ${userId} for ${atRiskItems.length} items`);
                } else {
                    results.push({
                        userId,
                        itemsAtRisk: 0,
                        status: 'no_items_at_risk'
                    });
                }

            } catch (userError) {
                console.error(`Error processing user ${userId}:`, userError);
                results.push({
                    userId,
                    status: 'error',
                    error: userError.message
                });
            }
        }

        console.log(`Notification check complete. Sent ${notificationsSent} notifications.`);

        res.status(200).json({
            success: true,
            totalUsers: userIds.length,
            notificationsSent,
            results
        });

    } catch (error) {
        console.error('Cron job error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

function getAtRiskItems(items) {
    const today = new Date();
    
    return items.filter(item => {
        if (item.used || item.wasted) return false;
        
        const expiry = new Date(item.expiry);
        const diffTime = expiry - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        return diffDays >= 0 && diffDays <= 3; // 0-3 days until expiry
    });
}

async function sendNotificationToUser(subscription, atRiskItems) {
    const urgentItems = atRiskItems.filter(item => {
        const expiry = new Date(item.expiry);
        const diffDays = Math.ceil((expiry - new Date()) / (1000 * 60 * 60 * 24));
        return diffDays <= 1;
    });

    const message = urgentItems.length > 0 
        ? `🚨 ${urgentItems.length} item${urgentItems.length > 1 ? 's' : ''} expire${urgentItems.length === 1 ? 's' : ''} tomorrow!`
        : `⚠️ ${atRiskItems.length} item${atRiskItems.length > 1 ? 's' : ''} expiring soon`;

    const payload = JSON.stringify({
        title: 'FreshKeeper Alert',
        body: message,
        items: atRiskItems.map(item => ({
            name: item.name,
            expiry: item.expiry,
            cost: item.cost
        })),
        url: '/'
    });

    try {
        await webpush.sendNotification(subscription, payload);
    } catch (error) {
        console.error('Failed to send notification:', error);
        
        // If subscription is invalid, remove it
        if (error.statusCode === 410) {
            console.log('Subscription expired, should remove from database');
            // TODO: Remove invalid subscription from KV store
        }
        
        throw error;
    }
}
