import React from "react";
import Resource from "../Resource/Resource";
import PersonalData from "../PersonalData/PersonalData";
// import SearchInput from "../Search/SearchInput";

class PhysiosDisplay extends React.Component {
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

    console.log("From pdata file: "  +searchTerm);

    return function (data) {
      let fname = data.fname;
      let lname = data.lname;

      console.log("res passed " + data.fname +" "+data.lname);

      return searchTerm !== "" && (fname.includes(searchTerm) || lname.includes(searchTerm));
    };
  }

  render() {
    return (
      <Resource
        path="http://localhost:5000/physios"
        render={(data) => {
          if (data.loading) return <p>Loading Patients...</p>;
          return (
            <div>
              <SearchForm
                onSearchFormChange={this.onSearchFormChange}
              />
              <PersonalData
                filterFunction={this.filterFunction}
                searchTerm={this.state.searchTerm}
                personDetails={data.payload}
              />
            </div>
          );
        }}
      />
    );
  }
}

class SearchForm extends React.Component {
  render() {
    /*this.props are the properties passed to this component
    / we have searchTerm and onChange function. Within the input
    / tag, notice the value of the input is assigned to the searchTerm state
    / previously an empty string. 
    / onChange event listener triggers the onSearchForm function 
    */
    const searchTerm = this.props.searchTerm;
    const onChange = this.props.onSearchFormChange;

    return (
      <div className="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Physiotherapist"
          value={searchTerm}
          onChange={onChange}
          aria-describedby="basic-addon1"
        ></input>
      </div>
    );
  }
}

export default PhysiosDisplay;
