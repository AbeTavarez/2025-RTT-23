import { useState } from "react";

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //todo: validation....
    // if there is a validation error
    // setError()

    console.log(values);
  };

  //TODO: implement resetForm function

  return { values, error, handleChange, handleSubmit };
}

export default useForm;
