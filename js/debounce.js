'use strict';

(function () {
  const DEBOUNCE_INTERVAL = 400;

  let lastTimeout;

  const removeDebounce = function (callback) {
    if (lastTimeout) {
      clearTimeout(lastTimeout);
    }

    lastTimeout = setTimeout(callback, DEBOUNCE_INTERVAL);
  };

  window.debounce = removeDebounce;
})();