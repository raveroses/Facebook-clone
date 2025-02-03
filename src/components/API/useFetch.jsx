import { useState } from "react";

const useFetch = (Customs) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handlePost = async (username, password, email) => {
    setLoading(true);
    try {
      const response = await Customs.post("posts", {
        username,
        password,
        email,
      });
      setData(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleGet = async (postId) => {
    try {
      const response = await Customs.get(`posts/${postId}`);
      setData(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  const handlePut = async (postId, username, password, email) => {
    try {
      const response = await Customs.put(`posts/${postId}`, {
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
