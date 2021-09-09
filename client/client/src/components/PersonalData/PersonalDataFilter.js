
const PersonalDataFilter = (props) => {
    const {filterFunction} = props;
    const { personDetails } = props;
    const {searchTerm} = props;
    return (
      <div className="list">
      {console.log(personDetails)}
        {personDetails.filter(filterFunction(searchTerm)
        ).map((person) => (
          <ul className="list-group p-2" key={person._id}>
            <li className="list-group-item">
              {person.fname + " " + person.lname}
            </li>
            <li className="list-group-item">{person.email}</li>
            <li className="list-group-item">{person.mobile}</li>
          </ul>
        ))}
      </div>
    );
  };
  
  export default PersonalDataFilter;