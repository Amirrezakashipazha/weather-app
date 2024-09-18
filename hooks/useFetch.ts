import { useEffect, useState } from "react";

export type Entry = {
  url: string;
  body?: any;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  header?: any;
};
const useFetch = <T=unknown>(entry: Entry) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{
    status: number;
    message: string;
  }>();

  const fetchData = async (url: string, body: any, header: any) => {
    try {
      setLoading(true);
      const data = await fetch(url);
      const response = await data.json();
      if (data.ok) {
        setData(response);
        setLoading(false);
        return;
      }
      setError({
        status: response.status,
        message: response.data.message || "something went wrong!",
      });
    } catch (err: any) {
      setError({ status: 500, message: err });
    }
  };
  useEffect(() => {
    fetchData(entry.url, entry.body, entry.header);
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
