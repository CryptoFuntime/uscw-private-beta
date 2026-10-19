/* USCW private beta: use the network, avoiding stale cached game builds.
   League saves are managed separately by localStorage and IndexedDB. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
