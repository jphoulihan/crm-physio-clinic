import React, { Component } from "react";
import axios from "axios";
// import PersonalDetailsForm from './PersonalDetailsForm';
// import SubmitModal from "./SubmitModal";

export class Clients extends Component {
  constructor() {
    super();
    this.state = {
      clients: [],
      isClients: false,
      title: "",
      fname: "",
      lname: "",
      mobile: "",
      phone: "",
      email: "",
      add_line_1: "test",
      add_line_2: "",
      town: "",
      county_city: "",
      eircode: "",
    };

    this.toggleShowClients = this.toggleShowClients.bind(this);
  }

  toggleShowClients = () => {
    this.setState((state) => ({ isClients: !state.isClients }));
  };

  componentDidMount() {
    axios.get("http://localhost:5000/clients").then((res) => {
      const clients = res.data;
      this.setState({ clients });
    });
  }

  //listens for keystrokes updates state by target name
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });

    console.log(event.target.value);
  };

  //on form submission prepares req.body for posting
  handleSubmit = (event) => {
    event.preventDefault();

    const {
      title,
      fname,
      lname,
      mobile,
      phone,
      email,
      add_line_1,
      add_line_2,
      town,
      county_city,
      eircode,
    } = this.state;

    const client = {
      title,
      fname,
      lname,
      mobile,
      phone,
      email,
      add_line_1,
      add_line_2,
      town,
      county_city,
      eircode
    };

    axios
      .post("http://localhost:5000/clients/insert", client)
      .then(() => console.log("Client inserted"))
      .catch((err) => {
        console.error(err);
      });

      event.target.reset();
  };

  render() {

    return (
      <div className="client-form col-sm m-2">
        <h1 className="pb-4">Patient</h1>
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
        <div className="show-clients">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.toggleShowClients}
          >
            Show Clients
          </button>
        </div>
        {this.state.isClients ? (
          <div>
            {this.state.clients.map((item) => (
              <ul className="list-group list-group-flush p-2" key={item._id}>
                <li className="list-group-item">{item.fname}</li>
                <li className="list-group-item">{item.lname}</li>
                <li className="list-group-item">{item.email}</li>
                <li className="list-group-item">{item.mobile}</li>
                <li className="list-group-item">{item.address.eircode}</li>
                <li className="list-group-item">
                  <p>Client ID for Session Creation Below</p>
                </li>
                <li className="list-group-item">{item._id}</li>
              </ul>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Clients;
