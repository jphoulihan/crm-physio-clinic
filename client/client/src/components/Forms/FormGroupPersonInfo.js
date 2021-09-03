import TextInput from "./TextInput";

const FormGroupPersonInfo = () => {
    return (
        <div className="form-row pb-2">
        <TextInput
                name="title"
                onChange={this.handleChange}
                placeholder="Title"
              />
              <div class="row g-2">
                <TextInput
                  name="fname"
                  onChange={this.handleChange}
                  placeholder="First Name"
                />
                <TextInput
                  name="lname"
                  onChange={this.handleChange}
                  placeholder="Last Name"
                />
              </div>
              <TextInput
                name="mobile"
                onChange={this.handleChange}
                placeholder="Mobile"
              />
              <TextInput
                name="phone"
                onChange={this.handleChange}
                placeholder="Home Phone"
              />
              <TextInput
                name="email"
                onChange={this.handleChange}
                placeholder="Email"
              />
            </div>
    )
}

export default FormGroupPersonInfo;