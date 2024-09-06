import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser, loginSuccess } from "../redux/authReducer";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

function RegistrationForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const user = { name, surname, email, password };
    // Dispatch registerUser action
    dispatch(registerUser(user));

    // Option 1: Automatically log the user in
    dispatch(loginSuccess(user));

    // Option 2: Redirect to login page (if not auto-login)
    navigate("/login");

    // Reset form
    setName("");
    setSurname("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div
      id="RegistrationForm"
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <section className="w-50">
        <form
          className="p-4 border rounded shadow-sm bg-light"
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="surname" className="form-label">
              Surname
            </label>
            <input
              type="text"
              className="form-control"
              id="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-light w-100">
            Register
          </button>
        </form>
      </section>
    </div>
  );
}

export default RegistrationForm;
