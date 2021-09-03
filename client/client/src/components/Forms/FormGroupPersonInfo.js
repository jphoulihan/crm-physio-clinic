import TextInput from "./TextInput";

const FormGroupPersonInfo = (props) => {
    const {handleChange} = props;
    return (
        <div className="form-row pb-2">
        <TextInput
                name="title"
                onChange={handleChange}
                placeholder="Title"
              />
              <div class="row g-2">
                <TextInput
                  name="fname"
                  onChange={handleChange}
                  placeholder="First Name"
                />
                <TextInput
                  name="lname"
                  onChange={handleChange}
                  placeholder="Last Name"
                />
              </div>
              <TextInput
                name="mobile"
                onChange={handleChange}
                placeholder="Mobile"
              />
              <TextInput
                name="phone"
                onChange={handleChange}
                placeholder="Home Phone"
              />
              <TextInput
                name="email"
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
    )
}

export default FormGroupPersonInfo;