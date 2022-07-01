export const inputFormlabel = [
  {
    name: "name",
    type: "text",
    size: "col-12 mt-3",
    label: "Name",
    placeholder: "Enter the name",
  },
  {
    name: "email",
    type: "email",
    size: "col-6 mt-3",
    label: "Email address",
    placeholder: "Enter the email",
  },
  {
    name: "mobileNum",
    type: "text",
    size: "col-6 mt-3",
    label: "Mobile",
    placeholder: "Enter the mobile number",
  },
  {
    name: "country",
    type: "text",
    size: "col-4 mt-3",
    label: "Country",
    placeholder: "Enter the country",
  },
  {
    name: "city",
    type: "text",
    size: "col-4 mt-3",
    label: "City",
    placeholder: "Enter the city",
  },
  {
    name: "state",
    type: "text",
    size: "col-4 mt-3",
    label: "State",
    placeholder: "Enter the state",
  },
  {
    name: "message",
    type: "text-area",
    size: "col-12 mt-3",
    label: "Message",
    placeholder: "Enter the message",
  },
];

export const intialValue = {
  name: "",
  email: "",
  mobileNum: "",
  country: "",
  state: "",
  city: "",
  message: "",
};

export const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Name is required!";
  }
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (
    !new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ).test(values.email)
  ) {
    errors.email = "This is not a valid email format";
  }
  if (!values.mobileNum) {
    errors.mobileNum = "Mobile number is required!";
  } else if (!new RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/).test(values.mobileNum)) {
    errors.mobileNum = "This is not a valid mobile number";
  }
  if (!values.country) {
    errors.country = "Country is required!";
  }
  if (!values.state) {
    errors.state = "State is required!";
  }
  if (!values.city) {
    errors.city = "City is required!";
  }
  if (!values.message) {
    errors.message = "Message is required!";
  }
  return errors;
};
