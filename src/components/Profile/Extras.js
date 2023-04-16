/** @format */

import React from "react";
import { useContext } from "react";
import { AppContext } from "./Profile";
const Extras = () => {
  const { details, prevStep, handleChange, handleSubmit } =
    useContext(AppContext);
  return (
    <div className="card animated fadeInLeft w-100">
      <div className="card-body">
        <h3 className="card-title">Miscellaneous</h3>
        <hr />
      </div>
      <form>
        <div className="row col-lg-10 mx-auto">
          <div className="col-lg-6 md-form">
            <input
              type="text"
              name="extra_1"
              className="form-control"
              value={details.extra_1}
              onChange={handleChange}
             
            />
            <label htmlFor="extra_1">Languages</label>
          </div>
          <div className="col-lg-6 md-form">
            <input
              type="text"
              name="extra_2"
              className="form-control"
              value={details.extra_2}
              onChange={handleChange}
             
            />
            <label htmlFor="extra_2">Hobbies</label>
          </div>
        </div>
        <br />
        <div className="row col-lg-10 mx-auto">
          <div className="col-lg-6 md-form">
            <input
              type="text"
              name="extra_3"
              id="extra_3"
              className="form-control"
              value={details.extra_3}
              onChange={handleChange}
             
            />
            <label htmlFor="extra_3">Activity/Achievement</label>
          </div>
          <div className="col-lg-6 md-form">
            <input
              type="text"
              name="extra_4"
              id="extra_4"
              className="form-control"
              value={details.extra_4}
              onChange={handleChange}
             
            />
            <label htmlFor="extra_4">Activity/Achievement</label>
          </div>
        </div>

        <div className="row col-lg-10 mx-auto">
          <div className="col-lg-12 md-form">
            <input
              type="text"
              name="extra_5"
              id="extra_5"
              className="form-control"
              value={details.extra_5}
              onChange={handleChange}
             
            />
            <label htmlFor="extra_5">Activity/Achievement</label>
          </div>
        </div>
        <br />
        <div className="container  d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-info mx-2"
            onClick={prevStep}
          >
            <i className="fas fa-angle-left mr-1"></i>Back
          </button>
          <button
            type="submit"
            className="btn btn-info mx-2"
            onClick={handleSubmit}
          >
            Submit <i className="fas fa-download ml-1"></i>
          </button>
        </div>
        <br />
      </form>
    </div>
  );
};

export default Extras;
