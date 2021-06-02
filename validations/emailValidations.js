import validate from "./validate";

const isEmailValid = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return validate(email.toLowerCase(), regex);
};

const validateEmail = (email, setError, name) => {
  const error = {
    message: "",
    hasError: false,
  };

  if (!isEmailValid(email)) {
    console.log(email);
    console.log(isEmailValid(email));
    error.message = "Please enter a valid email!";
    error.hasError = true;
  } else {
    console.log();
    error.message = "";
    error.hasError = false;
  }

  setError(name, error);
  return error;
};

export default validateEmail;
