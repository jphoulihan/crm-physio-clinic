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
    this.onSearchFormChange = this.onSearchFormChange.bind(this);
  }

  //show/hide all physios
  toggleShowPhysios = () => {
    this.setState((state) => ({ isPhysios: !state.isPhysios }));
  };

  //getting keyboard inputs to later filter a search
  onSearchFormChange(event) {
    this.setState({ searchTerm: event.target.value });
    console.log(event.target.value);
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

//could not complete search functionality
class SearchForm extends Component {
  render() {
    /*this.props are the properties passed to this component
    / we have searchTerm and onChange function. Within the input
    / tag, notice the value of the input is assigned to the searchTerm state
    / previously an empty string. 
    / onChange event listener triggers the onSearchForm function 
    */
    const searchTermFromProps = this.props.searchTerm;
    const onChangeFromProps = this.props.onChange;

    return (
      <div className="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Physiotherapist"
          value={searchTermFromProps}
          onChange={onChangeFromProps}
          aria-describedby="basic-addon1"
        ></input>
      </div>
    );
  }
}

class SearchResults extends Component {
  //search for a physio in the physios array
  physioFilterFunction(searchTerm) {
    return function (physio) {
      let fname = physio.fname;
      let lname = physio.lname;

      return (
        searchTerm !== "" &&
        (fname.includes(searchTerm) || lname.includes(searchTerm))
      );
    };
  }

  render() {
    return (
      <table>
        {this.props.physioArray
          .filter(this.physioFilterFunction(this.props.searchTerm))
          .map((a) => (
            <tbody key={a._id}>
              {console.log(a.fname)}
              {console.log(a._id)}
              <td>{a.fname}</td>
              <td>{a.lname}</td>
              <td>{a._id}</td>
            </tbody>
          ))}
      </table>
    );
  }
}

export default Physios;
