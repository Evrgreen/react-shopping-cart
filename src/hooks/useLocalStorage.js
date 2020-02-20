import { useState } from "react";

const useLocalStorage = (key, initialValues = "") => {
  const [state, setState] = useState(() => {
    const item = JSON.parse(localStorage.getItem(key));
    return item ? item : initialValues;
  });

  const setter = (value) => {
    setState(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [state, setter];
};

export default useLocalStorage;
