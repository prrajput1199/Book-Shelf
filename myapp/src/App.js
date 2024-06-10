import React, { useState } from "react";
import Header from "./Component/Header/Header";
import Container from "./Component/Books/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookShelf from "./Component/Bookshelf/BookShelf";
import HomePage from "./Component/Homepage/HomePage";

const App = () => {

  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState("");

  const addToCart = (book) => {
    setCart([...cart, book]);
    alert("Book is successfully added in your bokshelf")
  };

  const removeFromCart = (book) => {
    setCart(cart.filter((item) => item.key !== book.key));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomePage
              addToCart={addToCart}
              query={query}
              setQuery={setQuery}
            />
          }
        />

        <Route
          path="/cart"
          element={<BookShelf cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
