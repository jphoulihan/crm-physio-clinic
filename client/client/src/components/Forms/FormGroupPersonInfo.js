import TextInput from "./TextInput";

const FormGroupPersonInfo = (props) => {
  const { handleChange } = props;
  return (
    <div className="form-row pb-2">
      <TextInput name="title" onChange={handleChange} placeholder="Title" required={false}/>
      <div class="row g-2">
        <TextInput
          name="fname"
          onChange={handleChange}
          placeholder="First Name"
          required={true}
        />
        <TextInput
          name="lname"
          onChange={handleChange}
          placeholder="Last Name"
          required={true}
        />
      </div>
      <TextInput name="mobile" onChange={handleChange} placeholder="Mobile" required={true}/>
      <TextInput
        name="phone"
        onChange={handleChange}
        placeholder="Home Phone"
      />
      <TextInput name="email" onChange={handleChange} placeholder="Email" required={true}/>
    </div>
  );
};

export default FormGroupPersonInfo;
