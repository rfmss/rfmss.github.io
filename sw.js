var CACHE = 'rfmss-v7';
var HOME = '/';
var CORE = [
  HOME,
  '/index.html',
  '/manifest.json',
  '/assets/fox.webp',
  '/assets/robot.webp',
  '/assets/memo.png',
  '/assets/tomato.png',
  '/icon-blue.png',
  '/icon-blue-192.png',
  '/icon-blue-512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE)
      .then(function(cache) { return cache.addAll(CORE); })
      .then(function() { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys()
      .then(function(keys) {
        return Promise.all(keys
          .filter(function(key) { return key !== CACHE; })
          .map(function(key) { return caches.delete(key); }));
      })
      .then(function() { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then(function(cached) {
      var network = fetch(event.request).then(function(response) {
        if (response.ok) {
          var copy = response.clone();
          event.waitUntil(caches.open(CACHE).then(function(cache) {
            return cache.put(event.request, copy);
          }));
        }
        return response;
      });

      if (event.request.mode === 'navigate') {
        return network.catch(function() { return cached || caches.match(HOME); });
      }
      return cached || network;
    })
  );
});
