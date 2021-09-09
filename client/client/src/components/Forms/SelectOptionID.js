function SelectOptionID(props) {
    const { data } = props;
  
    function handleChange(e) {
      if (props.onChange) {
        props.onChange(e);
      }
    }
  
    return (
      <div className="mb-3">
        <select
          className="form-select"
          type="button"
          aria-label="Default select example"
          name={props.name}
          onChange={handleChange}
          required
        >
          <option defaultValue="">
            {props.description}
          </option>
          {data.map((item, index) => (
            <option key={index} value={item._id}>
              {item.fname+" "+item.lname}
            </option>
          ))}
        </select>
      </div>
    );
  }
  
  export default SelectOptionID;
  