function TextInput(props) {
    function handleChange(e) {
      if (props.onChange) {
        props.onChange(e);
      }
    }
    return (
      <div className="col mb-3">
        <input
          type="text"
          name={props.name}
          className="form-control"
          placeholder={props.placeholder}
          onChange={handleChange}
          required
        />
      </div>
    );
  }

  export default TextInput;