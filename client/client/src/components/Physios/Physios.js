import React, { Component } from "react";
import PhysiosDisplay from "./PhysiosDisplay";
import axios from "axios";
import FormGroupPersonInfo from "../Forms/FormGroupPersonInfo";
import FormGroupAddress from "../Forms/FormGroupAddress";

export class Physios extends Component {
  constructor() {
    super();
    this.state = {
      physios: [],
      isPhysios: false,
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
      searchTerm: " ",
    };

    this.toggleShowPhysios = this.toggleShowPhysios.bind(this);
  }

  //show/hide all physios
  toggleShowPhysios = () => {
    this.setState((state) => ({ isPhysios: !state.isPhysios }));
  };

  //listens for keystrokes updates state by target name
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
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
      ericode,
    } = this.state;

    const physio = {
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
      ericode,
    };

    axios
      .post("http://localhost:5000/physios/insert", physio)
      .then(() => console.log("Physio inserted"))
      .catch((err) => {
        console.error(err);
      });

    event.target.reset();
  };

  render() {
    return (
      <div className="col-sm m-2">
        {/*Physiotherapist Form*/}
        <div className="physio-form container-row">
          <h1 className="pb-4">Physiotherapist</h1>
          <form className="row" onSubmit={this.handleSubmit} no validate>
            <FormGroupPersonInfo handleChange={this.handleChange} />
            <FormGroupAddress handleChange={this.handleChange} />
            <div className="p-2">
              <button type="submit" className="btn btn-primary mb-3">
                Submit
              </button>
            </div>
          </form>
        </div>
        {/*Display all Physiotherapists*/}
        <div className="row p-2">
          <div>
            <button
              type="button"
              className="btn btn-dark m-2"
              onClick={this.toggleShowPhysios}
            >
              Show Physiotherapists
            </button>
          </div>
          {this.state.isPhysios ? <PhysiosDisplay /> : null}
        </div>
      </div>
    );
  }
}

export default Physios;
