import React, { Component } from "react";
import Shoes from "./Shoes.jsx";

export default class ShoesList extends Component {
  render() {
    const { arrShoes, showDetail } = this.props;
    return (
      <div className="row">
        {arrShoes.map((sp, index) => {
          return (
            <div className="col-4 mt-4" key={index}>
              <Shoes shoes={sp} showDetail={showDetail} />
            </div>
          );
        })}
      </div>
    );
  }
}
