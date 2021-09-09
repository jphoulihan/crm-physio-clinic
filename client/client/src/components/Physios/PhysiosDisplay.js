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
              <SearchList personDetails={data.payload} />
            </div>
          );
        }}
      />
    );
  }
}

export default PhysiosDisplay;
