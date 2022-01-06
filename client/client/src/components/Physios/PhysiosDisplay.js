import React from "react";
import Resource from "../Resource/Resource";
import SearchList from "../Search/SearchList";

class PhysiosDisplay extends React.Component {
  render() {
    return (
      <Resource
        path="http://localhost:5000/physios"
        render={(data) => {
          if (data.loading) return <p>Loading Patients...</p>;
          return (
            <div>
              <SearchList style={{backgroundColor:"#bce4ee"}} placeholder="Search Physiotherapist" personDetails={data.payload} endpoint={"physios"} />
            </div>
          );
        }}
      />
    );
  }
}

export default PhysiosDisplay;
