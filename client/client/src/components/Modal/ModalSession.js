import React from "react";
import axios from 'axios';
import UpdateInput from "../Forms/UpdateInput";
import useInput from "../Forms/UseInput";
import moment from "moment";
import "./Modal.css";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFE2AB",
  padding: "50px",
  borderRadius: "5px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0, 0, 0, .6)",
  zIndex: 1000,
};

const ModalSession = ({id, endpoint, onClose}) => {

    const date = useInput(moment(id.date).format("YY/MM/DD"))
    const time = useInput(id.time)
    const type = useInput(id.type)
    const fee = useInput(id.fee)
    const client = id.client_id
    const physio = id.physio_id
    const number = useInput(id.number)
    const duration = useInput(id.duration)

    const submitForm = (event) => {

      event.preventDefault();
  
      const update = {
        date: date.value,
        time: time.value,
        type: type.value,
        cleint_id: client,
        physio_id: physio,
        fee: fee.value,
        number: number.value,
        duration: duration.value
        }
  
      axios
      .patch(`http://localhost:5000/${endpoint}/${id._id}`, update)
      .then(() => console.log("Entry Updated"))
      .catch((err) => {
        console.error(err.response);
      });
  
      alert("Entry Updated");
    };

  return (
    <div style={OVERLAY_STYLES}>
      <div className="modal-form  container-row m-2" style={MODAL_STYLES}>
        <h1 className="pb-4">Update {endpoint.charAt(0).toUpperCase() + endpoint.slice(1)}</h1>
        <form className="row" onSubmit={submitForm} no validate>
          <div className="form-row pb-2">
            <UpdateInput
              name="date"
              label='Date'
              value={date.value}
              onChange={date.onChange}
              type="text"
            />
            <UpdateInput
              name="time"
              label='Time'
              value={time.value}
              onChange={time.onChange}
              type="text"
            />
            <UpdateInput
              name="type"
              label='Type'
              value={type.value}
              onChange={type.onChange}
              type="text"
            />
            <UpdateInput
              name="fee"
              label='Fee'
              value={fee.value}
              onChange={fee.onChange}
              type="text"
            />
            <UpdateInput
            name="number"
            label='Number'
            value={number.value}
            onChange={number.onChange}
            type="text"
          />
          <UpdateInput
            name="duration"
            label='Duration'
            value={duration.value}
            onChange={duration.onChange}
            type="text"
          />
          </div>
          <div className="btn-group p-2">
            <button
              name="button"
              className="btn btn-danger shadow-none mb-3"
              onClick={onClose}
            >
              Close
            </button>
            <button name="submit" className="btn btn-primary shadow-none mb-3">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalSession;
