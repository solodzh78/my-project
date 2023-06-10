type AnyFn = (...args: any[]) => any;

export function debounce<T extends AnyFn>(fn: T, ms: number) {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  function debounced(...args: Parameters<T>) {
    if (typeof timeoutId === 'number') {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      timeoutId = null;
      fn(...args);
    }, ms);
  }

  debounced.cancel = () => {
    if (typeof timeoutId !== 'number') {
      return;
    }
    clearTimeout(timeoutId);
  };

  return debounced;
}
