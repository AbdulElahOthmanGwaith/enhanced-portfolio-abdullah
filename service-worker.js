const CACHE_NAME = 'portfolio-v2';
const BASE_PATH = new URL('.', self.registration.scope).pathname;
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './enhancements.css',
  './scroll-to-top.css',
  './form-validation.css',
  './script.js',
  './scroll-to-top.js',
  './form-validation.js',
  './manifest.json'
].map((asset) => new URL(asset, self.registration.scope).toString());

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);

  // لا نتدخل في الطلبات الخارجية أو غير GET.
  if (event.request.method !== 'GET' || requestUrl.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const networkResponse = fetch(event.request)
        .then((response) => {
          if (response.ok && requestUrl.pathname.startsWith(BASE_PATH)) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => cachedResponse);

      return cachedResponse || networkResponse;
    })
  );
});
