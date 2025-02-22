export const useLocalStorage = (key: string) => {
  const setItem = (value: string) => {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      console.log(error);
    }
  };

  const getItem = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const removeItem = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };

  return { setItem, getItem, removeItem };
};
