// api/update-items.js - Update user's food items
import { kv } from '@vercel/kv';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { items, userId } = req.body;

        if (!items) {
            return res.status(400).json({ error: 'Items required' });
        }

        // If no userId provided, try to find user by IP or create new session
        let finalUserId = userId;
        if (!finalUserId) {
            // For now, we'll use a session-based approach
            finalUserId = `session_${Date.now()}`;
        }

        // Get existing user data
        const userData = await kv.get(`user:${finalUserId}`) || {};

        // Update items while preserving subscription
        const updatedData = {
            ...userData,
            items,
            lastUpdated: new Date().toISOString(),
            userId: finalUserId
        };

        // Store updated data
        await kv.set(`user:${finalUserId}`, updatedData);
        await kv.sadd('all_users', finalUserId);

        console.log(`Items updated for user ${finalUserId}:`, items.length, 'items');

        res.status(200).json({ 
            success: true, 
            userId: finalUserId,
            itemCount: items.length 
        });

    } catch (error) {
        console.error('Update items error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}