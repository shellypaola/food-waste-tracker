// sw.js - Service Worker for FreshKeeper
self.addEventListener('install', (event) => {
    console.log('Service Worker installing...');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activating...');
    event.waitUntil(self.clients.claim());
});

// Handle push notifications
self.addEventListener('push', (event) => {
    console.log('Push notification received:', event);
    
    const options = {
        body: 'You have food items expiring soon!',
        icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTIiIGZpbGw9IiMxMGI5ODEiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPgo8cGF0aCBkPSJtMyA5IDkgOSA5LTkiLz4KPC9zdmc+Cjwvc3ZnPgo=',
        badge: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTIiIGZpbGw9IiNlZjQ0NDQiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPgo8cGF0aCBkPSJNMTIgOXYzLjc1bTAtMi4wMzZBMTEuOTU5IDExLjk1OSAwIDAxMy4xNzEgOSI7Lz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPgo8cGF0aCBkPSJNMTIgMTVoLjAxIi8+Cjwvc3ZnPgo=',
        tag: 'freshkeeper-alert',
        data: {
            url: '/',
            title: 'FreshKeeper Alert'
        },
        actions: [
            {
                action: 'view',
                title: 'View Items'
            },
            {
                action: 'dismiss',
                title: 'Dismiss'
            }
        ],
        requireInteraction: true,
        silent: false
    };

    if (event.data) {
        try {
            const data = event.data.json();
            options.body = data.body || options.body;
            options.data.items = data.items || [];
        } catch (e) {
            console.log('Could not parse push data:', e);
        }
    }

    event.waitUntil(
        self.registration.showNotification('🥗 FreshKeeper Alert', options)
    );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
    console.log('Notification clicked:', event);
    
    event.notification.close();

    if (event.action === 'view' || !event.action) {
        // Open the app
        event.waitUntil(
            self.clients.matchAll().then((clients) => {
                // Check if the app is already open
                for (const client of clients) {
                    if (client.url.includes('/') && 'focus' in client) {
                        return client.focus();
                    }
                }
                
                // Open new window if app not already open
                if (self.clients.openWindow) {
                    return self.clients.openWindow('/');
                }
            })
        );
    }
});

// Handle background sync (for offline functionality)
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-items') {
        event.waitUntil(
            // Sync items when back online
            syncItemsWhenOnline()
        );
    }
});

async function syncItemsWhenOnline() {
    try {
        // Get items from cache or IndexedDB
        const items = await getStoredItems();
        
        if (items && items.length > 0) {
            await fetch('/api/update-items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ items: items })
            });
        }
    } catch (error) {
        console.error('Background sync failed:', error);
    }
}

async function getStoredItems() {
    // This would typically use IndexedDB, but for simplicity we'll skip it
    return [];
}