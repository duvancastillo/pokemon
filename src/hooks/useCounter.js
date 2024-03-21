import { useState } from 'react';

export const useCounter = (initialState) => {
  const [counter, setcounter] = useState(initialState);

  const increment = () => {
    setcounter(counter + 1);
  };
  const decrement = () => {
    if (counter === 0) return;
    setcounter(counter - 1);
  };

  const reset = () => {
    setcounter(initialState);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
