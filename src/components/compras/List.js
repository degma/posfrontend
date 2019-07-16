import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  console.log("mapStateToProps", state)
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => {
      console.log("Item", el)
      return (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    )})}
  </ul>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;