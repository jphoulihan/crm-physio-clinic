import "./SessionData.css";
import moment from "moment";
import Resource from "../Resource/Resource";

const SessionData = (props) => {
  const { sessionDetails } = props;
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Physio</th>
            <th scope="col">Type</th>
            <th scope="col">Duration</th>
          </tr>
        </thead>
        {sessionDetails.map((session) => (
          <tbody key={session._id}>
            <tr>
              <td>{moment(session.date).format("YY/MM/DD")}</td>
              <td>{session.time}</td>
              <Resource
                path="http://localhost:5000/physios"
                render={(data) => {
                  if (data.loading) return <td><b>Loading Sessions...</b></td>;
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
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default SessionData;
