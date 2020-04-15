import { BOOKS_LOADED, BOOKS_REQUESTED, BOOKS_ERROR, BOOK_ADDED_TO_CART, BOOK_REMOVE_FROM_CART, ALL_BOOKS_REMOVE_FROM_CART } from '../types';


 export  const booksLoaded = (newBooks) => {
    return {
        type: BOOKS_LOADED,
        payload: newBooks
    }
}

export const booksRequested = () => {
    return {
        type:  BOOKS_REQUESTED
    }
}

export const booksError = (error) => {
    return {
        type: BOOKS_ERROR,
        payload: error
    }
}

export const bookAddedToCart = (bookId) => {
    return {
        type: BOOK_ADDED_TO_CART,
        payload: bookId
    }
}

export const bookRemoveFromCart = (bookId) => {
    return {
        type: BOOK_REMOVE_FROM_CART,
        payload: bookId
    }
}

export const allBooksRemoveFromCart = (bookId) => {
    return {
        type: ALL_BOOKS_REMOVE_FROM_CART,
        payload: bookId
    }
}