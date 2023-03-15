/**
 * Copyright (c) 2016, Tiernan Cridland
 *
 * Permission to use, copy, modify, and/or distribute this software for any purpose with or without
 * fee is hereby
 * granted, provided that the above copyright notice and this permission notice appear in all
 * copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS
 * SOFTWARE INCLUDING ALL
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
 * SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR
 * PROFITS, WHETHER
 * IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION
 * WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 *
 * Typings for Service Worker
 * @author Tiernan Cridland
 * @email tiernanc@gmail.com
 * @license: ISC
 */
type ExtendableEvent = {
  waitUntil: (fn: Promise<unknown>) => void;
} & Event;

type PushSubscriptionChangeEvent = {
  readonly newSubscription?: PushSubscription;
  readonly oldSubscription?: PushSubscription;
} & ExtendableEvent;

// Client API

declare class Client {
  frameType: ClientFrameType;
  id: string;
  url: string;
  focused: boolean;
  focus(): void;
  postMessage(message: unknown): void;
}

type Clients = {
  claim: () => Promise<unknown>;
  get: (id: string) => Promise<Client>;
  matchAll: (options?: ClientMatchOptions) => Promise<Client[]>;
  openWindow: (url: string) => Promise<void>;
};

type ClientMatchOptions = {
  includeUncontrolled?: boolean;
  type?: ClientMatchTypes;
};

type WindowClient = {
  focused: boolean;
  visibilityState: WindowClientState;
  focus: () => Promise<WindowClient>;
  navigate: (url: string) => Promise<WindowClient>;
};

type ClientFrameType = 'auxiliary' | 'top-level' | 'nested' | 'none';
type ClientMatchTypes = 'window' | 'worker' | 'sharedworker' | 'all';
type WindowClientState = 'hidden' | 'visible' | 'prerender' | 'unloaded';

// Fetch API

type FetchEvent = {
  clientId: string | null;
  request: Request;
  respondWith: (response: Promise<Response> | Response) => Promise<Response>;
} & ExtendableEvent;

type InstallEvent = {
  activeWorker: ServiceWorker;
} & ExtendableEvent;

type ActivateEvent = Record<string, unknown> & ExtendableEvent;

// Notification API

type NotificationEvent = {
  action: string;
  notification: Notification;
} & ExtendableEvent;

// Push API

type PushEvent = {
  data: PushMessageData;
} & ExtendableEvent;

type PushMessageData = {
  arrayBuffer: () => ArrayBuffer;
  blob: () => Blob;
  json: () => unknown;
  text: () => string;
};

// Sync API

type SyncEvent = {
  lastChance: boolean;
  tag: string;
} & ExtendableEvent;

type ExtendableMessageEvent = {
  data: unknown;
  source: Client | Record<string, unknown>;
} & ExtendableEvent;

// ServiceWorkerGlobalScope

type ServiceWorkerGlobalScope = {
  caches: CacheStorage;
  clients: Clients;
  registration: ServiceWorkerRegistration;
  __WB_DISABLE_DEV_LOGS: boolean;
  addEventListener: ((
    event: 'activate',
    fn: (event?: ExtendableEvent) => unknown,
  ) => void) &
    ((
      event: 'message',
      fn: (event?: ExtendableMessageEvent) => unknown,
    ) => void) &
    ((event: 'fetch', fn: (event?: FetchEvent) => unknown) => void) &
    ((event: 'install', fn: (event?: ExtendableEvent) => unknown) => void) &
    ((event: 'push', fn: (event?: PushEvent) => unknown) => void) &
    ((
      event: 'notificationclick',
      fn: (event?: NotificationEvent) => unknown,
    ) => void) &
    ((event: 'sync', fn: (event?: SyncEvent) => unknown) => void);

  fetch: (request: Request | string) => Promise<Response>;
  skipWaiting: () => Promise<void>;
};
