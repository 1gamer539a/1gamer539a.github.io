const CACHE_NAME = 'gamershop-v2';
const STATIC_ASSETS = [
  '/index.html','/boutique.html','/compte.html','/caisse.html',
  '/admin.html','/legal.html','/reseaux.html','/contact.html','/gsvisa.html'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => {
    return Promise.allSettled(STATIC_ASSETS.map(url => cache.add(url).catch(() => {})));
  }));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;
  const url = e.request.url;
  if(url.includes('firebase') || url.includes('googleapis') || 
     url.includes('ibb.co') || url.includes('fonts.') ||
     url.includes('gstatic')) return;
  
  e.respondWith(
    caches.match(e.request).then(cached => {
      const fetchPromise = fetch(e.request).then(res => {
        if(res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return res;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
