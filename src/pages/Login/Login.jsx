import React, { useContext } from "react";
import { Link, useLocation, useNavigate,  } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import { AuthContext } from "../../../public/provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const location=useLocation()
  const navigate=useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then(() => {
        toast("User Login successfully");
        navigate(location?.state ? location.state : "/")
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center">
              New to? please
              <button className="btn btn-link">
                <Link to="/register">Register</Link>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
