import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const fetchData = async () => {
    const response = await fetch(url);
    const result = await response.json();
    if (result.status.http_code === 404) {
      setErr("Error to fetch data");
      setLoading(false);
      return;
    } else if (result.status.content_length === 2) {
      setErr("Nothing Found");
      setLoading(false);
      return;
    }
    const dataParse = JSON.parse(result.contents);
    if (dataParse.length) {
      if (dataParse.length >= 50) {
        setLoadMore(true);
      } else {
        setLoadMore(false);
      }
      setData([...data, ...dataParse]);
      setLoading(false);
      setErr("");
    } else {
      setData(dataParse);
      setLoading(false);
      setErr("");
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
    setErr("");
    // eslint-disable-next-line
  }, [url, search]);

  return { data, setData, loadMore, loading, setLoading, err, search, setSearch };
}

export default useFetch;
