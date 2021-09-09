import React from "react";
import Resource from "../Resource/Resource";
import SearchList from "../Search/SearchList";
// import PersonalDataFilter from "../PersonalData/PersonalDataFilter";

class PhysiosDisplay extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     searchTerm: "",
  //   };

  //   this.onSearchFormChange = this.onSearchFormChange.bind(this);
  //   this.filterFunction = this.filterFunction.bind(this);
  // }

  // //getting keyboard inputs to later filter a search
  // onSearchFormChange(event) {
  //   this.setState({ searchTerm: event.target.value });
  // }

  // filterFunction(searchTerm) {
  //   console.log("From pdata file: " + searchTerm);

  //   return function (data) {
  //     let fname = data.fname;
  //     let lname = data.lname;

  //     return (
  //       fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       lname.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //   };
  // }

  render() {
    return (
      <Resource
        path="http://localhost:5000/physios"
        render={(data) => {
          if (data.loading) return <p>Loading Patients...</p>;
          return (
            <div>
            <SearchList
              personDetails={data.payload}
            />
                {/* <SearchForm onSearchFormChange={this.onSearchFormChange} />
                <PersonalDataFilter
                  filterFunction={this.filterFunction}
                  searchTerm={this.state.searchTerm}
                  personDetails={data.payload}
                /> */}
            </div>
          );
        }}
      />
    );
  }
}

// class SearchForm extends React.Component {
//   render() {
//     const searchTerm = this.props.searchTerm;
//     const onChange = this.props.onSearchFormChange;

//     return (
//       <div className="input-group mb-3">
//         <input
//           type="text"
//           class="form-control"
//           placeholder="Physiotherapist"
//           value={searchTerm}
//           onChange={onChange}
//           aria-describedby="basic-addon1"
//         ></input>
//       </div>
//     );
//   }
// }

export default PhysiosDisplay;
