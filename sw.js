const CACHE_NAME = 'gamershop-v4';
const STATIC_ASSETS = [
  '/index.html','/boutique.html','/compte.html','/caisse.html',
  '/admin.html','/legal.html','/reseaux.html','/contact.html','/gsvisa.html'
];

// Domaines externes à NE JAMAIS toucher
const EXTERNAL_BLOCKED = [
  'firebase','googleapis','gstatic','ibb.co','icons8',
  'fonts.googleapis','fonts.gstatic','play-lh.googleusercontent'
];

function isBlocked(url) {
  return EXTERNAL_BLOCKED.some(d => url.includes(d));
}

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Ajouter les assets un par un pour éviter qu'une erreur bloque tout
      return Promise.allSettled(
        STATIC_ASSETS.map(url => cache.add(url).catch(() => {}))
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (isBlocked(e.request.url)) return; // Laisser passer sans toucher
  // Seulement les ressources du même domaine
  if (!e.request.url.startsWith(self.location.origin)) return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
