
const PersonalData = (props) => {
  const { personDetails } = props;
  return (
    <div className="list">
      {personDetails.map((person) => (
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

export default PersonalData;
