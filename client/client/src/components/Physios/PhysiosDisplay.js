import React from "react";
import Resource from "../Resource/Resource";
import PersonalData from "../PersonalData/PersonalData";

class PhysiosDisplay extends React.Component {

  constructor(){
    super();
    this.state = {
      id: ""
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    this.setState({id: event.target.value})
    console.log(this.state.id);
  }

  render() {
    return (
      <Resource
        path="http://localhost:5000/physios"
        render={(data) => {
          if (data.loading) return <p>Loading Patients...</p>;
          return <PersonalData personDetails={data.payload} />;
        }}
      />
    );
  }
}

export default PhysiosDisplay;