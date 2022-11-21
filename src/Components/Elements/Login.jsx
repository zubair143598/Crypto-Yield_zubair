import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleAction = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
          toast.info("log in successfully");
          navigate("/Home");
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          toast.error("please check ur password");
        }
        if (error.code === "auth/user-not-found") {
          toast.info("Please check the Email");
        }
      });
  };

  return (
    <div className="Login-section bg-black text-white">
      <div className="container text-center">
        <div className="row">
          <ToastContainer />
          <h1>Login Form</h1>
          <div className="col-md-4"></div>
          <div
            className="col-md-4 col2 rounded-5"
            style={{
              background:
                " linear-gradient(95.02deg, #FF82D4 0%, #1B1378 100%)",
              height: "450px",
            }}
          >
            <input
              type="email"
              className="form-control   p-2"
              style={{ marginTop: "8rem" }}
              name="email"
              // value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter ur Email"
            />
            <input
              type="password"
              className="form-control  mt-4 p-2"
              name="password"
              // value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter ur password"
            />
            <button
              className="btn mt-3 btn-primary fs-5 px-4"
              onClick={handleAction}
            >
              Login
            </button>
            <p className="mt-4">
              if u don,t have an account <Link to="/signup">Click here</Link>
            </p>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
