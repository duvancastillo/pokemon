import { useEffect, useState } from 'react';
const localCache = {};
export const useFecth = (url) => {
  const [state, setstate] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });
  const setLoadingState = () => {
    setstate({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };
  useEffect(() => {
    setLoadingState();
    getFecth();
  }, [url]);
  const getFecth = async () => {
    if (localCache[url]) {
      setstate({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });
    }
    const resp = await fetch(url);

    if (!resp.ok) {
      setstate({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        },
      });
      return;
    }
    const data = await resp.json();
    setstate({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    });
    localCache[url] = data;
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
