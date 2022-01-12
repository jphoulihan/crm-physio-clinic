import { useState } from "react";
import axios from "axios";
import "./PersonalData.css";
import Modal from "../Modal/Modal";

const PersonalDataFilter = (props) => {

  const { filterFunction } = props;
  const { personDetails } = props;
  const { searchTerm } = props;
  const { endpoint } = props;

  const [list, setList] = useState(personDetails);
  const [show, setShow] = useState(undefined);

  function handleUpdate(){

    const updateList = axios
      .get(`http://localhost:5000/${endpoint}`)
      .then((updateList) => setList(updateList.data))
      .catch((err) => {
        console.error(err);
      });

    setShow(undefined)
    return updateList;
  }

  function handleRemove(id) {

    if(window.confirm('Are you sure you want to delete this item?')){
      const newList = list.filter((item) => item._id !== id);
      setList(newList);
  
      axios
        .delete(`http://localhost:5000/${endpoint}/${id}`)
        .then(() => console.log("Client deleted"))
        .catch((err) => {
          console.error(err);
        });
    }

  }

  return (
    <div className="list">
      {list.filter(filterFunction(searchTerm)).map((person) => (
        <ul className="list-group pb-2 pt-2" key={person._id}>
          <div className="btn-group pt-2">
            <button
              type="button"
              className="btn btn-success btn-block shadow-none"
              onClick={()=> setShow(person._id)}
            >
              Update
            </button>
            <button
              type="button"
              className="btn btn-danger btn-block shadow-none"
              onClick={() => handleRemove(person._id)}
            >
              Delete
            </button>
          </div>
          <li className="list-group-item">
            {person.fname + " " + person.lname}
          </li>
          <li className="list-group-item">{person.email}</li>
          <li className="list-group-item">{person.mobile}</li>
          {show === person._id ? <Modal endpoint={endpoint} id={person} onClose={()=> handleUpdate()}/> : null}
        </ul>
      ))}
    </div>
  );
};

export default PersonalDataFilter;
