importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

firebase.initializeApp({ 'messagingSenderId': '446081549027'});

console.log(firebase.messaging());

self.addEventListener('install', function() {

});

self.addEventListener('activate', function() {

});

self.addEventListener('fetch', function() {
	
});