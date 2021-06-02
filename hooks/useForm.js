import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const setValue = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  return [values, onChange, setValue];
};

export default useForm;
