import React, { Component } from "react";

export default class Shoes extends Component {
  render() {
    const { shoes, showDetail } = this.props;
    return (
      <div className="card text-white">
        <img className="card-img-top" src={shoes.image} alt="..." />
        <div className="card-body bg-dark">
          <h4 className="card-title">{shoes.name}</h4>
          <p className="card-text">{shoes.price} $</p>
          <button
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#modalId"
            onClick={() => {
              showDetail(shoes);
            }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
