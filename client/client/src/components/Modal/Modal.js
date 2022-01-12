import React from "react";
import axios from 'axios';
import useInput from "../Forms/UseInput";
import UpdateInput from "../Forms/UpdateInput";
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

const Modal = ({ id, onClose, endpoint}) => {

  const title = useInput(id.title);
  const fname = useInput(id.fname);
  const lname = useInput(id.lname);
  const mobile = useInput(id.mobile);
  const phone = useInput(id.phone);
  const email = useInput(id.email);
  const add_line_1 = useInput(id.address.add_line_1);
  const add_line_2 = useInput(id.address.add_line_2);
  const town = useInput(id.address.town);
  const county_city = useInput(id.address.county_city);
  const eircode = useInput(id.address.eircode);


  console.log(title)

  const submitForm = (event) => {
    event.preventDefault();

    const update = {
      title: title,
      fname: fname,
      lname: lname,
      mobile: mobile,
      phone: phone,
      email: email,
      add_line_1: add_line_1,
      add_line_2: add_line_2,
      town: town,
      county_city: county_city,
      eircode: eircode,
    };


    console.log(update)

    axios
      .patch(`http://localhost:5000/${endpoint}/${id._id}`, update)
      .then(() => console.log("Entry Updated"))
      .catch((err) => {
        console.error(err);
      });

      alert("Entry Updated");
    
  };

  return (
    <div style={OVERLAY_STYLES}>
      <div className="modal-form  container-row m-2" style={MODAL_STYLES}>
        <h1 className="pb-4">Update {}</h1>
        <form className="row" onSubmit={submitForm} no validate>
          <div className="form-row pb-2">
            <UpdateInput
              name="title"
              onChange={title.onChange}
              value={title.value}
              required={false}
            />
            <div className="row g-2">
              <UpdateInput
                name="fname"
                onChange={fname.onChange}
                value={fname.value}
                required={true}
              />
              <UpdateInput
                name="lname"
                onChange={lname.onChange}
                value={lname.value}
                required={true}
              />
            </div>
            <UpdateInput
              name="mobile"
              onChange={mobile.onChange}
              value={mobile.value}
              required={true}
            />
            <UpdateInput
              name="phone"
              onChange={phone.onChange}
              value={phone.value}
            />
            <UpdateInput
              name="email"
              onChange={email.onChange}
              value={email.value}
              required={true}
            />
          </div>
          <div className="form-row pb-2">
          <div className="form-row pb-2">
              <h5 className="mb-3">Address</h5>
              <UpdateInput
                name="add_line_1"
                onChange={add_line_1.onChange}
                value={add_line_1.value}
                required={true}
              />
              <UpdateInput
                name="add_line_2"
                onChange={add_line_2.onChange}
                value={add_line_2.value}
                required={false}
              />
              <UpdateInput
                name="town"
                onChange={town.onChange}
                value={town.value}
                required={true}
              />
              <UpdateInput
                name="county_city"
                onChange={county_city.onChange}
                value={county_city.value}
                required={true}
              />
              <UpdateInput
                name="eircode"
                onChange={eircode.onChange}
                value={eircode.value}
                required={false}
              />
            </div>
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

export default Modal;
