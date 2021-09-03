import React from "react";
import TextInput from "./TextInput";

export class FormGroupAddress extends React.Component {
    //listens for keystrokes updates state by target name
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render(){
      return (
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
      )
  }
}

export default FormGroupAddress;