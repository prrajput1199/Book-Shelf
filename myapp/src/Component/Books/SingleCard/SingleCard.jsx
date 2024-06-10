import React, { useState } from "react";
import "./SingleCard.css";
const SingleCard = ({el,addToCart}) => {

    // const HandleAdd=(e)=>{
    //   e.preventDefault();
    //   const updatedBookshelf = [...books, el];
    //   setbooks(updatedBookshelf);
    //   localStorage.setItem('books', JSON.stringify(updatedBookshelf));
    //   console.log(books)
    // }

    
  return (
    <div className="main-card">
      <div className="single-card">
        <div className="content">
          <div className="title-content">
            <h2>Book title:</h2>
            <span>{el.title}</span>
          </div>

          <div className="title-content">
            <h2>Edition-Count:</h2>
            <span>{el.edition_count}</span>
          </div>
        </div>

        <button id="button1" onClick={()=> addToCart(el)} >Add to BookShelf</button>
      </div>
    </div>
  );
};

export default SingleCard;
