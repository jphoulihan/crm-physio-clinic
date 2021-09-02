import React from "react";
import Resource from "../Resource/Resource";
import PersonalData from "../PersonalData/PersonalData";

class PhysiosDisplay extends React.Component {
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