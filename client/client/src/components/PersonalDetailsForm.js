import React, { Component } from "react";

export class PersonalDetailsForm extends Component {
  render() {
    return (
      <div
          className="container-row"
          // style={{ maxWidth: "400px" }}
        >
          <form className="row" onSubmit={this.handleSubmit} no validate>
            <div className="form-row pb-2">

              <div className=" col-4 mb-3">
                <input
                  type="text"
                  name="title"
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="Title"
                />
              </div>
              
              <div class="row g-2">
              <div className=" col mb-3-7 mb-3">
                <input
                  type="text"
                  name="fname"
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className=" col mb-3-7 mb-3">
                <input
                  type="text"
                  name="lname"
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="Last Name"
                  required
                />
              </div>


              </div>
              <div className=" col mb-3-7 mb-3">
                <input
                  type="text"
                  name="mobile"
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="Mobile"
                  required
                />
              </div>
              <div className=" col mb-3-7 mb-3">
                <input
                  type="text"
                  name="phone"
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="Home Phone"
                />
              </div>
              <div className=" col mb-3-7 mb-3">
                <input
                  type="text"
                  name="email"
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <div className="form-row pb-2">
              <h5 className="mb-3">Address</h5>
              <div className=" col mb-3">
                <input
                  type="text"
                  name="add_line_1"
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="Address"
                  required
                />
              </div>
              <div className=" col mb-3">
                <input
                  type="text"
                  name="add_line_2"
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="Address Line 2"
                />
              </div>
              <div className=" col mb-3">
                <input
                  type="text"
                  name="town"
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="Town"
                  required
                />
              </div>
              <div className=" col mb-3">
                <input
                  type="text"
                  name="county_city"
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="County/City"
                  required
                />
              </div>
              <div className=" col mb-3">
                <input
                  type="text"
                  name="eircode"
                  onChange={this.handleChange}
                  class="form-control"
                  placeholder="Eircode"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary mb-3">
              Submit
            </button>
          </form>
        </div>
    );
  }
}

export default PersonalDetailsForm;