import React from "react";
import "./BookListItem.css";

const BookListItem = ({ book, onAddedToCart }) => {
  const { title, author, price } = book;
  return (
    <div className="book-list-item">
      <div className="book-cover"></div>
      <div className="book-details">
        <a href="#" className="book-title">{title}</a>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button 
        onClick = {onAddedToCart}
        className = "btn btn-info add-to-cart">Add to cart</button>
      </div>
    </div>
  );
};

export default BookListItem;
