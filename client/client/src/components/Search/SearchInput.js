import React from "react";

//could not complete search functionality
class SearchInput extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
    };

    this.onSearchFormChange = this.onSearchFormChange.bind(this);
  }

  //getting keyboard inputs to later filter a search
  onSearchFormChange(event) {
    this.setState({ searchTerm: event.target.value });
    console.log(event.target.value);
  }

  render() {
    const searchTerm = this.searchTerm;
    const onSearchFormChange = this.onSearchFormChange;

    return (
      <div className="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Physiotherapist"
          value={searchTerm}
          onChange={onSearchFormChange}
          aria-describedby="basic-addon1"
        ></input>
      </div>
    );
  }
}

export default SearchInput;
