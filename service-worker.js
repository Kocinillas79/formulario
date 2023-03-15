const cacheName = 'formulario-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/public/css/styles.css',
  '/public/js/main.js',
  '/public/img/icon-72x72.png',
  '/public/img/icon-96x96.png',
  '/public/img/icon-128x128.png',
  '/public/img/icon-144x144.png',
  '/public/img/icon-152x152.png',
  '/public/img/icon-192x192.png',
  '/public/img/icon-384x384.png',
  '/public/img/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
