self.addEventListener('push', event => {
    console.log('Push event received:', event);
    
    const data = event.data ? event.data.json() : {};
    console.log('Push notification data:', data);
    
    self.registration.showNotification(data.title || 'Default Title', {
        body: data.body || 'Default Body',
        icon: '/notification-icon.png'
    });
});
