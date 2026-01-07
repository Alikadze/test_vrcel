import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

const enableDefaultPassiveEvents = () => {
  if (typeof window === 'undefined') {
    return;
  }

  let supportsPassive = false;
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get: () => {
        supportsPassive = true;
        return false;
      },
    });
    window.addEventListener('test-passive', () => {}, opts);
    window.removeEventListener('test-passive', () => {}, opts);
  } catch {
    supportsPassive = false;
  }

  if (!supportsPassive) {
    return;
  }

  const originalAddEventListener = EventTarget.prototype.addEventListener;
  (EventTarget.prototype as any).addEventListener = function (
    type: string,
    listener: any,
    options?: boolean | AddEventListenerOptions,
  ) {
    const isScrollBlocking = type === 'touchstart' || type === 'touchmove' || type === 'wheel';

    if (isScrollBlocking) {
      if (options === undefined) {
        options = { passive: true };
      } else if (typeof options === 'boolean') {
        options = { capture: options, passive: true };
      } else if (options && (options as AddEventListenerOptions).passive === undefined) {
        options = { ...options, passive: true };
      }
    }

    return originalAddEventListener.call(this, type, listener, options);
  };
};

enableDefaultPassiveEvents();

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
