import "./SessionData.css";
import moment from "moment";
import { useState } from "react";
import axios from 'axios';
import ModalSession from "../Modal/ModalSession";
import { MdOutlineDelete, MdOutlineModeEditOutline } from "react-icons/md";
import Resource from "../Resource/Resource";

const SessionData = (props) => {

  const { sessionDetails } = props;
  const { endpoint } = props;
  
  const [show, setShow] = useState(undefined);
  const [list, setList] = useState(sessionDetails);

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
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Physio</th>
            <th scope="col">Type</th>
            <th scope="col">Duration</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {list.map((session) => (
          <tbody key={session._id}>
            <tr>
              <td>{moment(session.date).format("YY/MM/DD")}</td>
              <td>{session.time}</td>
              <Resource
                path="http://localhost:5000/physios"
                render={(data) => {
                  if (data.loading)
                    return (
                      <td>
                        <b>Loading Sessions...</b>
                      </td>
                    );
                  return data.payload.map(
                    (item) =>
                      session.physio_id === item._id && (
                        <td key={item._id}>{item.fname + " " + item.lname}</td>
                      )
                  );
                }}
              />
              <td>{session.type}</td>
              <td>{session.duration}</td>
              <td>
                <MdOutlineModeEditOutline type="button" onClick={() => setShow(session._id)}/>
              </td>
              <td>
                <MdOutlineDelete type="button" onClick={() => handleRemove(session._id)}/>
              </td>
              {show === session._id ? (
                <ModalSession
                id={session}
                onClose={() => handleUpdate()}
                endpoint={endpoint}
                />
              ) : null}
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default SessionData;
