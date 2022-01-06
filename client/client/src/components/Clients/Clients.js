import React, { Component } from "react";
import ClientsDisplay from "./ClientsDisplay";
import axios from "axios";
import FormGroupPersonInfo from "../Forms/FormGroupPersonInfo";
import FormGroupAddress from "../Forms/FormGroupAddress";
import "./Clients.css";

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

    // if (this.validateEmail(this.state.email) !== true) {
    //   this.setState({ showModal: true });
    // }

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
            <FormGroupPersonInfo handleChange={this.handleChange} />
            <FormGroupAddress handleChange={this.handleChange} />
            <div className="p-2">
              <button type="submit" className="btn btn-primary shadow-none mb-3">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="row p-2">
        <div>
            <button
              type="button"
              className="btn btn-dark shadow-none m-2 pb-2"
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
