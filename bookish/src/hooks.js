import axios from "axios";
import { useState, useEffect } from "react";

export const useRemoteService = (inital) => {
  const [data, setData] = useState(inital);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await axios.get("http://localhost:8080/books");
        setData(res.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  return { data, loading, error };
};
