import "./SessionData.css"

const SessionData = (props) => {
  const { sessionDetails } = props;
  return (
    <div className="list seesion-data">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Type</th>
            <th scope="col">Duration</th>
          </tr>
        </thead>
        {sessionDetails.map((session) => (
          <tbody key={session._id}>
            <tr>
              <td>{session.time}</td>
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
