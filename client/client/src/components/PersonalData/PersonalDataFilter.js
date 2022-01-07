import {useState} from "react";
import axios from 'axios';
import "./PersonalData.css";
import Modal from "../Modal/Modal";
//solution 1, pass endpoint down to this component to delete from relevant collection
const PersonalDataFilter = (props) => {
  
  const { filterFunction } = props;
  const { personDetails } = props;
  const { searchTerm } = props;
  const {endpoint} = props;

  const [list, setList] = useState(personDetails);
  const [show, setShow] = useState(false);

  function HandleRemove(id){
    console.log(id);
    console.log(endpoint)

    const newList = list.filter((item) => item._id !== id);
    setList(newList);
      // DELETE request using axios inside useEffect React hook
      axios
      .delete(`http://localhost:5000/${endpoint}/${id}`)
      .then(() => console.log("Client deleted"))
      .catch((err) => {
        console.error(err);
      });
  }
    
  return (
    <div className="list">
      {list.filter(filterFunction(searchTerm)
      ).map((person) => (
        <ul className="list-group pb-2 pt-2" key={person._id}>
          <div className="btn-group pt-2">
          <button type="button" className="btn btn-success btn-block shadow-none" onClick={() => setShow(true)}>Update</button>
          <Modal show={show} onClose={() => setShow(false)}/>
          <button type="button" className="btn btn-danger btn-block shadow-none" onClick={()=> HandleRemove(person._id)}>Delete</button>
          </div>
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