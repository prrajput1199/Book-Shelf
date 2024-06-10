import React from "react";
import "./Bookshelf.css";

const BookShelf = ({ cart, removeFromCart }) => {
  return (
    <div className="main-card1">
      {cart
        ? cart.map((el) => {
            return (
              <>
                <div className="single-card1">
                  <div className="content">
                    <div className="title-content">
                      <h2>Book title:</h2>
                      <span>{el.title}</span>
                    </div>

                    <div className="title-content">
                      <h2>Edition-Count:</h2>
                      <span>{el.edition_count}</span>
                    </div>

                    <button id="button1" onClick={() => removeFromCart(el)}>
                      Remove from BookShelf
                    </button>
                  </div>
                </div>
              </>
            );
          })
        : "Cart is Empty"}
    </div>
  );
};

export default BookShelf;
