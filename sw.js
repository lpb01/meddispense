// Minimal Service Worker to handle mobile push notifications

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('push', (event) => {
    const data = event.data ? event.data.text() : 'Dispenser Update';

    event.waitUntil(
        self.registration.showNotification('MedDispense Hub', {
            body: data,
            icon: 'https://cdn-icons-png.flaticon.com/512/888/888857.png'
        })
    );
});
