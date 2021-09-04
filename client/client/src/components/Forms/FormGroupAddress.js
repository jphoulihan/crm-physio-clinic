import TextInput from "./TextInput";

const FormGroupAddress = (props) => {

    const {handleChange} = props;

    return (
        <div className="form-row pb-2">
              <h5 className="mb-3">Address</h5>
              <TextInput
                name="add_line_1"
                onChange={handleChange}
                placeholder="Address"
                required={true}
              />
              <TextInput
                name="add_line_2"
                onChange={handleChange}
                placeholder="Address Line 2"
                required={false}
              />
              <TextInput
                name="town"
                onChange={handleChange}
                placeholder="Town"
                required={true}
              />
              <TextInput
                name="county_city"
                onChange={handleChange}
                placeholder="County/City"
                required={true}
              />
              <TextInput
                name="eircode"
                onChange={handleChange}
                placeholder="Eircode"
                required={false}
              />
            </div>
    )
}

export default FormGroupAddress;