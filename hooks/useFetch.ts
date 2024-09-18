import { useEffect, useState } from "react";

export type Entry = {
  url: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: any; // Optional request body
  headers?: Record<string, string>; // Optional headers
};

const useFetch = <T = unknown>(entry: Entry) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ status: number; message: string }>();

  const fetchData = async (url: string, method?: string, body?: any, headers?: Record<string, string>) => {
    try {
      setLoading(true);

      // Set up the fetch options, including method, body, and headers
      const fetchOptions: RequestInit = {
        method: method || "GET", // Default to GET if no method is provided
        headers: {
          "Content-Type": "application/json",
          ...(headers || {}), // Spread headers if provided
        },
      };

      // Only include the body if it's not a GET request
      if (body && method !== "GET") {
        fetchOptions.body = JSON.stringify(body);
      }

      const response = await fetch(url, fetchOptions);
      const responseData = await response.json();

      if (response.ok) {
        setData(responseData);
      } else {
        setError({
          status: response.status,
          message: responseData.message || "Something went wrong!",
        });
      }
    } catch (err: any) {
      setError({ status: 500, message: err.message || "Network error" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(entry.url, entry.method, entry.body, entry.headers);
  }, [entry.url, entry.method, entry.body, entry.headers]);

  return { data, loading, error };
};

export default useFetch;
