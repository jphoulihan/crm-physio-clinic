import React, { Component } from "react";
import axios from "axios";

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

  //get all physios and fill physios array
  componentDidMount() {
    axios.get("http://localhost:5000/physios").then((res) => {
      const physios = res.data;
      this.setState({ physios });
    });
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
        <div className="physio-form container-row">
        <h1 className="pb-4">Physiotherapist</h1>
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


            <div className="p-2">
              <button type="submit" className="btn btn-primary mb-3">
                Submit
              </button>
            </div>
          </form>
        </div>


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
        {this.state.isPhysios ? (
          <div className="list">
            {this.state.physios.map((item) => (
              <ul className="list-group p-2" key={item._id}>
                <li className="list-group-item">
                  Name: {item.fname} {item.lname}
                </li>
                <li className="list-group-item">Email: {item.email}</li>
                <li className="list-group-item">Mobile: {item.mobile}</li>     
                <li className="list-group-item">{item._id}</li>
              </ul>
            ))}
          </div>
        ) : null}

        </div>
        {/* <div className="search p-3">
        <h5>Search for Physiotherapist</h5>
        <SearchForm
          searchTerm={this.state.searchTerm}
          onChange={this.onSearchFormChange}
        />
        <SearchResults
          searchTerm={this.state.searchTerm}
          physioArray={this.state.physios}
        />
        </div> */}
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
