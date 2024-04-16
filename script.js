document.getElementById('notifyBtn').addEventListener('click', function() {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      sendNotification();
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          sendNotification();
        }
      });
    }
  });
  
  function sendNotification() {
    var notification = new Notification('Desktop Notification', {
      body: 'This is a desktop notification example!',
      icon: 'icon.png' // You can specify the path to an icon image here
    });
  
    notification.onclick = function() {
      console.log('Notification clicked');
      // You can add code here to handle what happens when the notification is clicked
    };
  }
  