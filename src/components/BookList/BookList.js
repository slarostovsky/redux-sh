import React, { useEffect } from "react";
import BookListItem from "../BookListItem";
import { connect } from "react-redux";
import { booksLoaded, booksRequested, booksError, bookAddedToCart } from "../../actions";
import compose from "../../utils";
import withBookstoreService from "../Hoc/";
import ErrorIndicator from "../ErroIndicator";
import Spinner from "../Spinner";
import "./BookList.css";

const BookListContainer = ({
  books,
  loading,
  error,
  fatchBooks,
  onAddedToCart
}) => {


  useEffect(() => {
    fatchBooks()
  }, []);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorIndicator />;
  }
  return <BookList books={books} onAddedToCart={onAddedToCart}/>
  
};


const BookList = ({ books, onAddedToCart }) => {
    return (
        <ul className="book-list">
          {books.map((book) => {
            return (
              <li key={book.id}>
                <BookListItem 
                onAddedToCart = {() => onAddedToCart(book.id)}
                book={book} />
              </li>
            );
          })}
        </ul>
      );
}

const mapStateToProps = ({bookList: { books, loading, error }}) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fatchBooks: () => {
      dispatch(booksRequested());
      bookstoreService
        .getBooks()
        .then((data) => {
          dispatch(booksLoaded(data));
        })
        .catch((err) => dispatch(booksError(err)));
    },
    onAddedToCart: (id) => dispatch(bookAddedToCart(id))
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
