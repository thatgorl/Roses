import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../redux/authReducer";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function LoginForm() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate(); // Use navigate to redirect

  const handleLogin = (e) => {
    e.preventDefault();
    const user = { email: "test@example.com", name: "John Doe" };
    dispatch(loginSuccess(user));
    navigate("/"); // Redirect to home after login
  };

  return (
    <div
      id="LoginForm"
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <section className="w-50">
        {user ? (
          <div className="p-4 border rounded shadow-sm bg-light text-center">
            <h1>Hello {user.name}, welcome back!</h1>
          </div>
        ) : (
          <form
            onSubmit={handleLogin}
            className="p-4 border rounded shadow-sm bg-light"
          >
            <div className="mb-5">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="btn btn-light w-100">
              Submit
            </button>
          </form>
        )}
      </section>
    </div>
  );
}

export default LoginForm;
