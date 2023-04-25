export default function debounce(func, timeout) {
  let timer;
  let setDelay = timeout ?? 300;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, setDelay);
  };
}
