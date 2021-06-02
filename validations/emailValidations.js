import validate from "./validate";

const isEmailValid = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return validate(email, regex);
};

const validateEmail = (email, setError) => {
  const error = {
    message: "",
    hasError: false,
  };

  if (isEmailValid(email)) {
    error.message = "Please enter a valid email!";
    error.hasError = true;
  } else {
    error.message = "Please enter a valid email!";
    error.hasError = true;
  }

  setError(error);
  return error;
};

export default validateEmail;
