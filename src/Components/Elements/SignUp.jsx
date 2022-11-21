import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleAction = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((req) => {
        console.log("done22");
         toast.info("Signed in")
         navigate("/Home")
      })
      .catch((error) => {
       if(error.code==="auth/wrong-password"){
        toast.error("please check ur password")
       }
       if(error.code==="auth/user-not-found"){
        toast.info("Please check the Email");
       }
      });
  };
  return (
    <div className="signUp-section bg-black text-white">
      <div className="container text-center">
        <div className="row">
            <ToastContainer/>
          <h1>SignUp Form</h1>
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
            //   value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter ur Email"
            />
            <input
              type="password"
              className="form-control  mt-4 p-2"
              name="password"
            //   value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter ur password"
            />
            <button
              className="btn mt-3 btn-primary fs-5 px-4"
              onClick={handleAction}
            >
              SignUp
            </button>
            <p className="mt-3">
              If already have acount <Link to="/login">click Here</Link>{" "}
            </p>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
