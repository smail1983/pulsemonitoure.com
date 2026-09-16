// Service Worker Registration for Ads
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
        console.log('Service Worker registered for ads');
    }).catch(function(error) {
        console.log('Service Worker registration failed:', error);
    });
}