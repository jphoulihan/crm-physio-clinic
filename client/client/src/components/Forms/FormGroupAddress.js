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
              />
              <TextInput
                name="add_line_2"
                onChange={handleChange}
                placeholder="Address Line 2"
              />
              <TextInput
                name="town"
                onChange={handleChange}
                placeholder="Town"
              />
              <TextInput
                name="county_city"
                onChange={handleChange}
                placeholder="County/City"
              />
              <TextInput
                name="eircode"
                onChange={handleChange}
                placeholder="Eircode"
              />
            </div>
    )
}

export default FormGroupAddress;