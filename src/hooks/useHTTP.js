import { useEffect, useState } from "react";

export function useHTTP(service) {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function loadData() {
      try {
        setIsLoading(true);
        setIsError(false);
        setError(null);

        const data = await service();
        console.log(data);
        setResults(data);
      } catch (err) {
        setError({ message: err.message });
        setIsError(false);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  return { results, isLoading, isError, error };
}
