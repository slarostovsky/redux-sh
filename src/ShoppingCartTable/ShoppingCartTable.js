import React from "react";
import "./ShoppingCartTable.css";
import { bookAddedToCart, bookRemoveFromCart, allBooksRemoveFromCart } from '../actions';
import { connect } from "react-redux";

const ShoppingCartTable = ({
  items,
  total,
  onIncresae,
  onDecrease,
  onDelete,
}) => {

  
  const renderRow = ({ id, title, count, total }, index) => {
    return (
      <tr key={id}>
        <td>{index+1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}</td>
        <td>
          <button
            onClick={() => onIncresae(id)}
            className="btn btn-outline-success"
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning"
          >
            <i className="fa fa-minus-circle" />
          </button>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger"
          >
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your Oreder</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
          <tbody>
          {
            items.map(renderRow)
          }
          </tbody>
      </table>
        <div className="total">${total}</div>
    </div>
  );
};

const mapStateToProps = ({shoppingCart:{ cartItems, orderTotal }}) => {
  return {
    items: cartItems,
    total: orderTotal
  }
}

const mapDispatchToProps = {

    onIncresae: bookAddedToCart,
    onDecrease: bookRemoveFromCart,
    onDelete: allBooksRemoveFromCart
  
}

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCartTable);
