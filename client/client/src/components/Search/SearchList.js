import React from "react";
import PersonalDataFilter from "../PersonalData/PersonalDataFilter";
import "./SearchList.css";

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
      <div className="search-list" style={this.props.style}>
        <input
          type="text"
          className="form-control mt-1 mb-1"
          placeholder={this.props.placeholder}
          value={this.state.searchTerm}
          onChange={this.onSearchFormChange}
          aria-describedby="basic-addon1"
        ></input>
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
