function SelectOption(props) {
  const { data } = props;

  function handleChange(e) {
    if (props.onChange) {
      props.onChange(e);
    }
  }

  return (
    <div className="mb-3">
      <select
        class="form-select"
        type="button"
        aria-label="Default select example"
        name={props.name}
        onChange={handleChange}
        required
      >
        <option selected disabled value="">
          {props.description}
        </option>
        {data.map((item) => (
          <option key={item.id} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectOption;
