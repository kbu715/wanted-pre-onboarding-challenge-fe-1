import { useState } from 'react';

export const useLocalStorage = (
  key: string,
  defaultValue: string | null,
): [string | null, (newValue: string | null) => void] => {
  const [storedValue, setStoredValue] = useState<string | null>(() => {
    try {
      const value = window.localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (error) {
      return defaultValue;
    }
  });

  const setValue = (newValue: string | null) => {
    if (typeof newValue === 'string') {
      try {
        window.localStorage.setItem(key, JSON.stringify(newValue));
      } catch (error) {
        console.log('setValue error:' + error);
      }
    }
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};
