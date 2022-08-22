export function debounce(callback, delay) {
  let timerID;

  return function (...args) {
    clearTimeout(timerID);

    timerID = setTimeout(() => {
      callback.apply(this, args);
      timerID = null;
    }, delay);
  };
}
