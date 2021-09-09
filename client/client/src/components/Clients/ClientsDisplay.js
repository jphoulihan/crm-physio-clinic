import React from "react";
import Resource from "../Resource/Resource";
import SearchList from "../Search/SearchList";

class ClientsDisplay extends React.Component {
  render() {
    return (
      <Resource
        path="http://localhost:5000/clients"
        render={(data) => {
          if (data.loading) return <p>Loading Patients...</p>;
          return <SearchList personDetails={data.payload}/>;
        }}
      />
    );
  }
}

export default ClientsDisplay;
