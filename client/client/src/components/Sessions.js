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
    return (
      <div className="col-sm-4 m-2">
        <div className="session-form container-row w-100 pb-2">
          <h1 className="pb-3">Sessions</h1>
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
                </div>
              </div>
              <div className="p-2">
                <button type="submit" class="btn btn-primary mb-3">
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
              className="btn  m-2 btn-dark"
              onClick={this.toggleSessions}
            >
              Show All Sessions
            </button>
          </div>
          {this.state.isSessions ? (
            <div className="list">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Time</th>
                    <th scope="col">Type</th>
                    <th scope="col">Duration</th>
                  </tr>
                </thead>
                {this.state.sessions.map((item) => (
                  <tbody>
                    <tr key={item._id}>
                      <td>{item.time}</td>
                      <td>{item.type}</td>
                      <td>{item.duration}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Sessions;
