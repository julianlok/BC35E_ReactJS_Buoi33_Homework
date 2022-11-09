import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { shoes } = this.props;
    return (
      <div>
        <div
          className="modal fade"
          id="modalId"
          tabIndex={-1}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title" id="modalTitleId">
                  Product Detail
                </h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-4 text-center">
                    <h3>{shoes.name}</h3>
                    <img src={shoes.image} alt="..." width={250} />
                  </div>
                  <div className="col-8">
                    <table className="table text-center">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Price</th>
                          <th colSpan={4}>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{shoes.name}</td>
                          <td>{shoes.price}</td>
                          <td colSpan={4}>{shoes.description}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
