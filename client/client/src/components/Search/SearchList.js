import React from "react";
import PersonalDataFilter from "../PersonalData/PersonalDataFilter";

class SearchList extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
    };

    this.onSearchFormChange = this.onSearchFormChange.bind(this);
    this.filterFunction = this.filterFunction.bind(this);
  }

  //getting keyboard inputs to later filter a search
  onSearchFormChange(event) {
    this.setState({ searchTerm: event.target.value });
    console.log(event.target.value);
  }

  filterFunction(searchTerm) {
    return function (data) {
      let fname = data.fname;
      let lname = data.lname;

      return (
        fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lname.toLowerCase().includes(searchTerm.toLowerCase())
      );
    };
  }

  render() {
    return (
      <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Physiotherapist"
          value={this.state.searchTerm}
          onChange={this.onSearchFormChange}
          aria-describedby="basic-addon1"
        ></input>
      </div>
        <PersonalDataFilter
          personDetails={this.props.personDetails}
          filterFunction={this.filterFunction}
          searchTerm={this.state.searchTerm}
        />
      </div>
    );
  }
}

export default SearchList;
