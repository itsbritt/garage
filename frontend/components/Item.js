import React, { Component } from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import formatMoney from "../lib/formatMoney";
import Title from "./styles/Title";
import ItemStyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  };

  render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        {item.image && <img src={item.image} alt={item.title} />}
        <Title>
          <Link href={{ pathname: "/item", query: { id: item.id } }}>
            <a>{item.title}</a>
          </Link>
          {item.title}
        </Title>
        <PriceTag>{formatMoney(item.price)}</PriceTag>
        <p>{item.description}</p>
        <div className="button-list">
          <Link href={{ pathname: "update", query: { id: item.id } }}>
            <a>Edit</a>
          </Link>
          <button>Add to Cart</button>
          <button>Delete</button>
        </div>
      </ItemStyles>
    );
  }
}
