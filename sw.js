var CACHE = 'rfmss-blueprint-v7';
var HOME = '/';
var CORE = [
  HOME,
  '/index.html',
  '/manifest.json',
  '/assets/css/rafamass-blueprint.css',
  '/assets/css/portfolio.css',
  '/assets/css/profile-refinement.css',
  '/assets/css/project-previews.css',
  '/assets/js/portfolio.js',
  '/assets/perfil-rafa.svg',
  '/assets/boletosmil.svg',
  '/assets/dirlizanu-preview.svg',
  '/assets/pomodoro-preview.svg',
  '/assets/calculadora-preview.svg',
  '/assets/fox.webp',
  '/assets/robot.webp',
  '/assets/memo.png',
  '/icon-sage.png',
  '/icon-sage-192.png',
  '/icon-sage-512.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE)
      .then(function (cache) { return cache.addAll(CORE); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys
          .filter(function (key) { return key !== CACHE; })
          .map(function (key) { return caches.delete(key); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then(function (cached) {
      var network = fetch(event.request).then(function (response) {
        if (response.ok) {
          var copy = response.clone();
          event.waitUntil(caches.open(CACHE).then(function (cache) {
            return cache.put(event.request, copy);
          }));
        }
        return response;
      });

      if (event.request.mode === 'navigate') {
        return network.catch(function () { return cached || caches.match(HOME); });
      }

      return cached || network;
    })
  );
});
