import { useEffect, useState } from 'react';

export default function useFetchData(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const APIdata = await response.json();
        setData(APIdata);
      } catch (err) {
        console.error(err);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    }
    fetchData();
  }, []);

  return { data, isLoading };
}
