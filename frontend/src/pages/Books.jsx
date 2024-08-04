import React, { useEffect, useState } from "react";
import axios from "axios";

const Books = () => {
  const [bookdata, setBookData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:9800/books");
      try {
        if (data) {
          console.log(data.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return <div>Books</div>;
};

export default Books;
