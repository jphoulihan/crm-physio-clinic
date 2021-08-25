import React, { Component } from "react";
import axios from "axios";

export class Sessions extends Component {
  constructor() {
    super();
    this.state = {
      sessions: [],
      isSessions: false,
      date: "",
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
  }

  componentDidMount() {
    axios.get("http://localhost:5000/sessions").then((res) => {
      const sessions = res.data;
      this.setState({ sessions });
    });
  }

  //show/hide all physios
  toggleSessions = () => {
    this.setState((state) => ({ isSessions: !state.isSessions }));
  };

  //listens for keystrokes updates state by target name
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };

  //on form submission prepares req.body for posting
  handleSubmit = (event) => {
    event.preventDefault();

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
  };

  render() {
    return (
      <div className=" client-form col-sm-4 m-2">
        <h1 className="pb-3">Sessions</h1>
        <div
        className="container-row w-100 pb-2"
        style={{ maxWidth: "450px" }}
      >
        <form className="row" onSubmit={this.handleSubmit} novalidate>
          <div className="form-row pb-2">
            <div className="col mb-3">
              <input
                type="text"
                name="date"
                onChange={this.handleChange}
                className="form-control"
                placeholder="Date"
                required
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please input a date.</div>
            </div>
            <div className="mb-3">
              <select
                class="form-select"
                type="button"
                aria-label="Default select example"
                name="time"
                onChange={this.handleChange}
                required
              >
                <option selected disabled value="">
                  Select Time
                </option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
              </select>
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please input a date.</div>
            </div>
            <div className="mb-3">
              <select
                class="form-select"
                type="button"
                aria-label="Default select example"
                name="type"
                onChange={this.handleChange}
                required
              >
                <option selected disabled value="">
                  Select Treatment Type
                </option>
                <option value="Assessment">Assessment</option>
                <option value="Massage Therapy">Massage Therapy</option>
                <option value="Hydrotherapy">Hydrotherapy</option>
                <option value="Electrotherapy">Electrotherapy</option>
                <option value="Rehabilitation">Rehabilitation</option>
                <option value="Other">Other</option>
              </select>
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please input a date.</div>
            </div>
            <div className="col mb-3">
              <input
                type="text"
                name="client_id"
                onChange={this.handleChange}
                className="form-control"
                placeholder="Insert Client ID"
                required
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please input client ID.</div>
            </div>
            <div className="col mb-3">
              <input
                type="text"
                name="physio_id"
                onChange={this.handleChange}
                className="form-control"
                placeholder="Insert Physio ID"
                required
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please input physio ID.</div>
            </div>

            <div className="row g-2">
            <div className="col mb-3 ">
              <input
                type="text"
                name="fee"
                onChange={this.handleChange}
                className="form-control"
                placeholder="Fee"
                required
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please input a fee.</div>
            </div>
            <div className="col mb-3">
              <input
                type="text"
                name="number"
                onChange={this.handleChange}
                className="form-control"
                placeholder="Number"
                required
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please input a number.</div>
            </div>
            <div className="col mb-3">
              <input
                type="text"
                name="duration"
                onChange={this.handleChange}
                className="form-control"
                placeholder="Duration"
                required
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please input a duration.</div>
            </div>
          </div>
            </div>
          <button
            type="submit"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Submit
          </button>
        </form>
      </div>
        <div>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.toggleSessions}
          >
            Show All Sessions
          </button>
        </div>
        {this.state.isSessions ? (
          <div className="map-sessions" style={{ maxWidth: "450px" }}>
            {this.state.sessions.map((item) => (
              <ul className="list-group list-group-flush p-2" key={item._id}>
                <li className="list-group-item">Time: {item.time}</li>
                <li className="list-group-item">Fee: {item.fee}</li>
                <li className="list-group-item">Type: {item.type}</li>
                <li className="list-group-item">Duration: {item.duration}</li>
              </ul>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Sessions;
