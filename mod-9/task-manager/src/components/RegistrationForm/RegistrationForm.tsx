import { useState } from "react";

function RegistrationForm() {
  // Form State
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    subscribeToNewsletter: false,
  });

  // Error State
  const [error, setError] = useState<string | null>("");

  // Handle Form Submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  // Handle Form Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (value === "") {
      setError("This field is required");
    } else {
      setError(null);
    }

    if (name === "username") {
      if (value.length < 5) {
        setError("Username must be at least 5 characters long");
      } else if (value.includes(" ")) {
        setError("Username cannot contain spaces");
      } else {
        setError(null);
      }
    }
  };

  // Validate Password
  const validatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value !== formData.password) {
      setError("Passwords do not match");
    } else {
      setError(null);
    }
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-max mx-auto mb-10"
    >
      <label htmlFor="username">Username:</label>
      <input
        className="outline ml-2"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />

      <label htmlFor="password">Password:</label>
      <input
        className="outline ml-2"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        className="outline ml-2"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        onInput={validatePassword}
      />

      <label htmlFor="email">Email:</label>
      <input
        className="outline ml-2"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="subscribeToNewsletter">
        Subscribe To Newsletter:
        <input
          className="ml-2"
          type="checkbox"
          name="subscribeToNewsletter"
          checked={formData.subscribeToNewsletter}
          onChange={handleChange}
          disabled={!formData.email.includes('@')}
        />
      </label>

      {error && <p>{error}</p>}

      <button className="outline" type="submit">
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
