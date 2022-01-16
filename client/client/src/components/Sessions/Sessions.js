import axios from "axios";
import React, { Component } from "react";
import Resource from "../Resource/Resource";
import TextInput from "../Forms/TextInput";
import DatePicker from "react-datepicker";
import SelectOption from "../Forms/SelectOption";
import SessionData from "../SessionData/SessionData";
import SelectOptionID from "../Forms/SelectOptionID";

import "./Sessions.css";
import "react-datepicker/dist/react-datepicker.css";

export class Sessions extends Component {
  constructor() {
    super();
    this.state = {
      sessions: [],
      isSessions: false,
      date: new Date(),
      time: "",
      client_id: "",
      physio_id: "",
      fee: "",
      number: "",
      duration: "",
      type: "",
      other: "",
    };

    this.toggleSessions = this.toggleSessions.bind(this);
    this.dateSelect = this.dateSelect.bind(this);
  }

  //show/hide all physios
  toggleSessions = () => {
    this.setState((state) => ({ isSessions: !state.isSessions }));
  };

  dateSelect(date) {
    this.setState({date: date})
  }

  //listens for keystrokes updates state by target name
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //on form submission prepares req.body for posting
  handleSubmit = (event) => {
    const {
      date,
      time,
      client_id,
      physio_id,
      fee,
      number,
      duration,
      type,
      other,
    } = this.state;

    const session = {
      date,
      time,
      client_id,
      physio_id,
      fee,
      number,
      duration,
      type,
      other,
    };

    axios
      .post("http://localhost:5000/sessions", session)
      .then(() => console.log("Session created"))
      .catch((err) => {
        console.error(err);
      });

    event.target.reset();

    this.fetchSessions();
  };

  render() {
    const OpeningHours = require("../JSON/OpeningHours.json");
    const Treatments = require("../JSON/Treatments.json");

    return (
      <div className="col-sm-4 m-2">
        <div className="session-form container-row w-100 pb-2">
          <h1 className="pb-3">Sessions</h1>
          <form className="row" onSubmit={this.handleSubmit} no validate>
            <div className="form-row pb-2">
            <div className="col mb-3">
              <DatePicker name='date' className="date-picker" selected={this.state.date} onChange={this.dateSelect} required={true}/>
              </div>
              <SelectOption
                name="time"
                description={"Select Time"}
                onChange={this.handleChange}
                data={OpeningHours}
              />
              <SelectOption
                name="type"
                description={"Select Treatment Type"}
                onChange={this.handleChange}
                data={Treatments}
              />
              <Resource
                path="http://localhost:5000/clients"
                render={(data) => {
                  if (data.loading) return <p>Loading Sessions...</p>;
                  return (
                    <SelectOptionID
                      name="client_id"
                      onChange={this.handleChange}
                      description={"Client Select"}
                      data={data.payload}
                    />
                  );
                }}
              />
              <Resource
                path="http://localhost:5000/physios"
                render={(data) => {
                  if (data.loading) return <p>Loading Sessions...</p>;
                  return (
                    <SelectOptionID
                      name="physio_id"
                      onChange={this.handleChange}
                      description={"Physio Select"}
                      data={data.payload}
                    />
                  );
                }}
              />
              <div className="row g-2">
                <TextInput
                  name="fee"
                  onChange={this.handleChange}
                  placeholder="Fee"
                  required={true}
                />
                <TextInput
                  name="number"
                  onChange={this.handleChange}
                  placeholder="Number"
                  required={true}
                />
                <TextInput
                  name="duration"
                  onChange={this.handleChange}
                  placeholder="Duration"
                  required={true}
                />
              </div>
              <div className="p-2">
                <button type="submit" className="btn btn-primary shadow-none mb-3">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="p-2">
          <div>
            <button
              type="button"
              className="btn  m-2 btn-dark shadow-none"
              onClick={this.toggleSessions}
            >
              Show All Sessions
            </button>
          </div>
          {this.state.isSessions ? (
            <Resource
              path="http://localhost:5000/sessions"
              render={(data) => {
                if (data.loading) return <p>Loading Sessions...</p>;
                return <SessionData sessionDetails={data.payload} endpoint={'sessions'} />;
              }}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Sessions;
