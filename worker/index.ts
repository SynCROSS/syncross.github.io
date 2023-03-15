declare let self: ServiceWorkerGlobalScope;

self.__WB_DISABLE_DEV_LOGS = true;

/**
 * Service worker interepts requests for images
 * It puts retrieved images in cache for 10 minutes
 * If image not found responds with fallback
 */

const INVALIDATION_INTERVAL = 30 * 24 * 60 * 60 * 1000; // 30 days
const NS = 'MAGE';
const SEPARATOR = '|';
const VERSION = Math.ceil(now() / INVALIDATION_INTERVAL);

/**
 * Helper to get current timestamp
 * @returns {Number}
 */
function now() {
  const d = new Date();
  return d.getTime();
}

/**
 * Build cache storage key that includes namespace, url and record version
 * @param {string} url
 * @returns {string}
 */
function buildKey(url: string) {
  return `${NS}${SEPARATOR}${url}${SEPARATOR}${VERSION}`;
}

/**
 * The complete Triforce, or one or more components of the Triforce.
 * @typedef {Object} RecordKey
 * @property {string} ns - namespace
 * @property {string} url - request identifier
 * @property {string} ver - record varsion
 */

/**
 * Parse cache key
 * @param {string} key
 * @returns {RecordKey}
 */
function parseKey(key: string) {
  const parts = key.split(SEPARATOR);
  return {
    ns: parts[0],
    key: parts[1],
    ver: parseInt(parts[2], 10),
  };
}

/**
 * Invalidate records matchinf actual version
 *
 * @param {CacheStorage} caches
 * @returns {Promise}
 */
async function purgeExpiredRecords(caches: CacheStorage) {
  console.log('Purging...');
  return await caches.keys().then(async function (keys) {
    return await Promise.all(
      keys.map(async function (key) {
        const record = parseKey(key);
        if (record.ns === NS && record.ver !== VERSION) {
          console.log('deleting', key);
          return await caches.delete(key);
        }
      }),
    );
  });
}

/**
 * Proxy request using cache-first strategy
 *
 * @param {CacheStorage} caches
 * @param {Request} request
 * @returns {Promise}
 */
async function proxyRequest(caches: CacheStorage, request: Request) {
  const key = buildKey(request?.url);
  // set namespace
  return await caches.open(key).then(async function (cache) {
    // check cache
    return await cache.match(request).then(async function (cachedResponse) {
      if (cachedResponse != null) {
        console.info('Take it from cache', request?.url);
        return cachedResponse;
      }
      // { mode: "no-cors" } gives opaque response
      // https://fetch.spec.whatwg.org/#concept-filtered-response-opaque
      // so we cannot get info about response status
      return await fetch(request?.clone())
        .then(function (networkResponse) {
          if (networkResponse.type !== 'opaque' && !networkResponse.ok) {
            throw new Error('Resource not available');
          }
          console.info(
            'Fetch it through Network',
            request?.url,
            networkResponse.type,
          );
          cache.put(request, networkResponse.clone());
          return networkResponse;
        })
        .catch(function () {
          console.error('Failed to fetch', request?.url);
          // Placeholder image for the fallback
          // return await fetch('./placeholder.jpg', { mode: 'no-cors' });
        });
    });
  });
}

self.addEventListener('install', function (event) {
  event?.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function (event) {
  event?.waitUntil(purgeExpiredRecords(caches));
});

self.addEventListener('fetch', function (event) {
  const request = event?.request;

  console.log('Detected request', request?.url);

  if (
    request?.method !== 'GET' ||
    request?.url.match(/\.(jpe?g|png|gif|svg)$/) == null
  ) {
    return;
  }

  console.log('Accepted request', request?.url);

  event?.respondWith(proxyRequest(caches, request))?.catch(console.error);
});

export {};
