import { useState, useEffect } from 'react';
import { fetchResponse } from '../types';

const useFetch = (url: string) => { 
  
  const [data, setData] = useState<fetchResponse>({code: 0, description: ''});
  useEffect(() => { 
    if (!url) {
      console.error('URL not provided');
      return;
    }
    const requestOptions = {
      method: "POST",
      headers: { Accept: "application/json" },
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [url]);
  return [data];
};

export default useFetch;