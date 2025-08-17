// api/subscribe.js - Handle push notification subscriptions
import { kv } from '@vercel/kv';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { subscription, items } = req.body;

        if (!subscription) {
            return res.status(400).json({ error: 'Subscription required' });
        }

        // Generate a unique user ID
        const userId = generateUserId(subscription);
        
        // Store subscription and initial items
        const userData = {
            subscription,
            items: items || [],
            lastUpdated: new Date().toISOString(),
            userId
        };

        // Store in Vercel KV (Redis)
        await kv.set(`user:${userId}`, userData);
        await kv.sadd('all_users', userId);

        console.log(`User ${userId} subscribed successfully`);

        res.status(200).json({ 
            success: true, 
            userId,
            message: 'Subscription saved successfully' 
        });

    } catch (error) {
        console.error('Subscribe error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

function generateUserId(subscription) {
    // Create a consistent user ID from subscription endpoint
    const endpoint = subscription.endpoint;
    const hash = btoa(endpoint).slice(0, 12);
    return `user_${hash}`;
}