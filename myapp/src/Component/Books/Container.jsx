import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard/SingleCard";
import "./Container.css";

const Container = ({ query, books, setbooks, addToCart }) => {
  const [Data, setData] = useState({});

  const fetchData = async () => {
    try {
      const res = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
      const result = await res.json();
      setData(result);
    } catch (error) {
      alert("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);
  return (
    <div className="main-container">
      <div className="container">
        {Data.docs &&
          Data.docs.map((el) => {
            return (
              <>
                <SingleCard
                  el={el}
                  key={el.key}
                  addToCart={ addToCart}
                />
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Container;
