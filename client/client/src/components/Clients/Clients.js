import React, { Component } from "react";
import ClientsDisplay from "./ClientsDisplay";
import TextInput from "../Forms/TextInput";
import axios from "axios";

export class Clients extends Component {
  constructor() {
    super();
    this.state = {
      clients: [],
      showModal: false,
      isClients: false,
      title: "",
      fname: "",
      lname: "",
      mobile: "",
      phone: "",
      email: "",
      add_line_1: "",
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

  validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  //listens for keystrokes updates state by target name
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //on form submission prepares req.body for posting
  handleSubmit = (event) => {
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

    if (this.validateEmail(this.state.email) !== true) {
      this.setState({ showModal: true });
    }

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
      eircode,
    };

    axios
      .post("http://localhost:5000/clients/insert", client)
      .then(() => console.log("Client inserted"))
      .catch((err) => {
        console.error(err);
      });

    event.target.reset();
    alert("Client Submitted");
  };

  render() {
    return (
      <div className="col-sm m-2">
        <div className="client-form  container-row">
          <h1 className="pb-4">Patient</h1>
          <form className="row" onSubmit={this.handleSubmit} no validate>
            <div className="form-row pb-2">
              <TextInput
                name="title"
                onChange={this.handleChange}
                placeholder="Title"
              />
              <div class="row g-2">
                <TextInput
                  name="fname"
                  onChange={this.handleChange}
                  placeholder="First Name"
                />
                <TextInput
                  name="lname"
                  onChange={this.handleChange}
                  placeholder="Last Name"
                />
              </div>
              <TextInput
                name="mobile"
                onChange={this.handleChange}
                placeholder="Mobile"
              />
              <TextInput
                name="phone"
                onChange={this.handleChange}
                placeholder="Home Phone"
              />
              <TextInput
                name="email"
                onChange={this.handleChange}
                placeholder="Email"
              />
            </div>

            <div className="form-row pb-2">
              <h5 className="mb-3">Address</h5>
              <TextInput
                name="add_line_1"
                onChange={this.handleChange}
                placeholder="Address"
              />
              <TextInput
                name="add_line_2"
                onChange={this.handleChange}
                placeholder="Address Line 2"
              />
              <TextInput
                name="town"
                onChange={this.handleChange}
                placeholder="Town"
              />
              <TextInput
                name="county_city"
                onChange={this.handleChange}
                placeholder="County/City"
              />
              <TextInput
                name="eircode"
                onChange={this.handleChange}
                placeholder="Eircode"
              />
            </div>
            <div className="p-2">
              <button type="submit" className="btn btn-primary mb-3">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="row p-2">
          <div className="show-clients">
            <button
              type="button"
              className="btn  m-2 btn-dark"
              onClick={this.toggleShowClients}
            >
              Show Patients
            </button>
          </div>
          {this.state.isClients ? <ClientsDisplay /> : null}
        </div>
      </div>
    );
  }
}

export default Clients;
