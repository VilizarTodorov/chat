const validate = (input, regex) => {
  const re = regex;
  return re.test(input);
};

export default validate;
