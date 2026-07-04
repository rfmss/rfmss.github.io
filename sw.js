var CACHE = 'rfmss-v4';
var URLS = [
  '/',
  '/jogos/',
  '/eskrev/',
  '/bijuled/',
  '/FernandaTowers/',
  '/p/',
  '/dirlizanu/',
  '/nota/',
  '/pomodoro/',
  '/bloco/',
  '/calculadora/',
  '/manifest.json'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return Promise.all(URLS.map(function(url) {
        return fetch(url).then(function(r) {
          if (r.ok) return cache.put(url, r);
        }).catch(function() {});
      }));
    }).then(function() { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.filter(function(k) { return k !== CACHE; }).map(function(k) { return caches.delete(k); }));
    }).then(function() { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      var net = fetch(e.request).then(function(r) {
        if (r.ok) {
          caches.open(CACHE).then(function(c) { c.put(e.request, r.clone()); });
        }
        return r;
      }).catch(function() {});
      return cached || net;
    })
  );
});
