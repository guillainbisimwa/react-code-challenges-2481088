import { useState } from "react";

export default function FormValidator() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [mssg, setMssg] = useState("");

  const onErrors = () => {
    const errors = [];
    if (email.includes("@")) {
      errors.push("Email Must contain @");
    }
    if (password.length < 8) {
      errors.push("Password must be equal to 8");
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = onErrors();

    setMssg(error.length ? error.join(", ") : "User Created");
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2>Sign Up!</h2>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password-confirm">Confirm Password </label>
      <input
        type="password"
        name="password-confirm"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <h2>{mssg}</h2>
      <input type="submit" value="Submit" />
    </form>
  );
}
