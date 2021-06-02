import validate from "./validate";

const hasOneLowerCaseChr = (password) => {
  const regex = /(?=.*[a-z])/;
  return validate(password, regex);
};

const hasOneUpperCaseChr = (password) => {
  const regex = /(?=.*[A-Z])/;
  return validate(password, regex);
};

const hasOneNumericChr = (password) => {
  const regex = /(?=.*[0-9])/;
  return validate(password, regex);
};

const hasOneSpecialChr = (password) => {
  const regex = /(?=.*[!@#$%^&*])/;
  return validate(password, regex);
};

const hasMinLength = (password) => {
  const regex = /(?=.{8,})/;
  return validate(password, regex);
};

const validatePassword = (password, setError) => {
  const error = {
    message: "",
    hasError: false,
  };

  if (!hasOneLowerCaseChr(password)) {
    error.message = "The password must contain at least 1 lowercase alphabetical character!";
    error.hasError = true;
  } else if (!hasOneUpperCaseChr(password)) {
    error.message = "The password must contain at least 1 uppercase alphabetical character!";
    error.hasError = true;
  } else if (!hasOneNumericChr(password)) {
    error.message = "The password must contain at least 1 numeric character!";
    error.hasError = true;
  } else if (!hasOneSpecialChr(password)) {
    error.message = "The password must contain at least one special character!";
    error.hasError = true;
  } else if (!hasMinLength(password)) {
    error.message = "The password must be eight characters or longer!";
    error.hasError = true;
  } else {
    error.message = "";
    error.hasError = false;
  }

  setError(error);
  return error;
};

export default validatePassword;
