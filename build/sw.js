self.addEventListener('install', function() {
	console.log('Install!');
});

self.addEventListener('activate', function() {
	console.log('Activate!');
});

self.addEventListener('fetch', function() {
	console.log('Fetch!');
});