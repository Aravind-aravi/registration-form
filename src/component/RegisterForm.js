import React from "react";
import "../App.css";
import { inputFormlabel, intialValue, validate } from "./common";
import InputForm from "./InputForm";

function RegisterForm() {
  const [user, setUser] = React.useState(intialValue);
  const [errors, setErrors] = React.useState({});
  const [isSubmit, setIsSubmit] = React.useState(false);

  React.useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      alert("Registered successfully");
      setUser(intialValue);
    }
  }, [errors, isSubmit]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setErrors(validate(user));
    setIsSubmit(true);
  };

  return (
    <div className="container form-center">
      <form onSubmit={onSubmitHandler}>
        <div className="card card-border">
          <div className="card-body">
            {" "}
            <h3 className="App">Registration Form</h3>
            <div className="form-row">
              {inputFormlabel.map((input, index) => {
                return (
                  <div className={`${input.size}`} key={index}>
                    <label>{input.label}</label>
                    <InputForm
                      input={input}
                      onChangeHandler={onChangeHandler}
                      user={user}
                    />
                    <small className="form-text text-muted text-invalid">
                      {errors[input.name]}
                    </small>
                  </div>
                );
              })}
            </div>
            <div className="d-grid App">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
