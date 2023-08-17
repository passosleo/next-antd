export function useLocalStorage() {
  function storeValue(key: string, value: any) {
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(error);
    }
  }

  function getStoredValue(key: string, defaultValue: any = null) {
    try {
      if (typeof window !== "undefined") {
        const item = localStorage.getItem(key);
        if (!item) return defaultValue;
        return JSON.parse(item);
      }
      return defaultValue;
    } catch (error) {
      console.error(error);
    }
  }

  function clearStorage() {
    try {
      if (typeof window !== "undefined") {
        localStorage.clear();
      }
    } catch (error) {
      console.error(error);
    }
  }

  return { storeValue, getStoredValue, clearStorage };
}
