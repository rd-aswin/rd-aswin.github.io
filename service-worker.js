self.addEventListener('push', event => {
    console.log('Push event received:', event);
    
    const data = event.data ? event.data.json() : {};
    console.log('Push notification data:', data);
    
    const title = data.title || 'Default Title';
    const options = {
        body: data.body || 'Default Body',
        icon: data.icon || '/notification-icon.png'
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});
