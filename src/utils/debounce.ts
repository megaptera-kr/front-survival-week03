const debounce = <T, >(callback: (...args: T[]) => void, delay = 500) => {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: T[]) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export default debounce;
