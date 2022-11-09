import React, { Component } from "react";
import Modal from "./Modal.jsx";
import ShoesList from "./ShoesList.jsx";
import data from "../data/shoesData.json";

export default class BaiTapShoesApp extends Component {
  state = {
    productDetail: {},
  };

  showDetail = (data) => {
    this.setState({
      productDetail: data,
    });
  };

  render() {
    return (
      <div className="container">
        <Modal shoes={this.state.productDetail} />
        <ShoesList arrShoes={data} showDetail={this.showDetail} />
      </div>
    );
  }
}
