import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);

  const fetchData = async () => {
    const response = await fetch(url);
    const result = await response.json();
    const dataParse = JSON.parse(result.contents);
    console.log(dataParse);
    if (dataParse.length) {
      setData([...data, ...dataParse]);
    } else {
      setData(dataParse);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data };
}

export default useFetch;
