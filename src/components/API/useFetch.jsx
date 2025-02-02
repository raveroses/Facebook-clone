import { useState } from "react";

const useFetch = (Customs) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handlePost = async (username, password, email) => {
    setLoading(true);
    try {
      const response = await Customs.post("/title", {
        username,
        password,
        email,
      });
      setData(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleGet = async () => {
    try {
      const response = await Customs.get("title");
      setData(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  const handlePut = async (username, password, email) => {
    try {
      const response = await Customs.put("title", {
        username,
        password,
        email,
      });
      setData(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return { data, loading, error, handlePost, handleGet, handlePut };
};
export default useFetch;
