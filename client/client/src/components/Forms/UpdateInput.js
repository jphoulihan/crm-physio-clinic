function UpdateInput(props) {

    const {required} = props;

    return (
      <div className="col mb-3">
        <input
          type="text"
          name={props.name}
          className="form-control"
          value={props.value}
          onChange={props.onChange}
          required={required}
        />
      </div>
    );
  }

  export default UpdateInput;