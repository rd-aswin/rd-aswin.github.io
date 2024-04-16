// Check if service workers are supported
if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        try {
            const registration = await navigator.serviceWorker.register('/service-worker.js');
            console.log('Service Worker registered:', registration);
        } catch (error) {
            console.error('Service Worker registration failed:', error);
        }
    });
}

// Function to display a notification
function displayNotification() {
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                const notification = new Notification('Hello from My PWA', {
                    body: 'This is a test notification from My PWA.',
                    icon: '/notification-icon.png'
                });
            }
        });
    }
}

document.getElementById('notifyButton').addEventListener('click', displayNotification);
