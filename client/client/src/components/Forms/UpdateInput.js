function UpdateInput(props) {

    const {required} = props;

    return (
      <div className="form-group row">
    <label className="col-sm-2 col-form-label">{props.label}</label>
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
      </div>
    );
  }

  export default UpdateInput;