import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { db,app } from "./Firebase";
import {getAuth} from "firebase/auth";
import { setDoc,doc  } from "firebase/firestore"; 
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comment , setComment]=useState("")
  const handleAction=(e)=>
  {
    // try{
      e.preventDefault();
      const auth=getAuth()
      const user= auth.currentUser;
    setDoc(doc(db, "users",user.uid), {
      firstName,
      lastName,
      phoneNumber,
      comment,
    },
    setFirstName(""),
    setLastName(""),
    setPhoneNumber(""),
    setComment(""),
    );
  
    toast.info("data is store successfully");
    console.log("Document written with ID: ", user.uid);
  // } catch (e) {
  //   toast.error("Error adding document: ", e);
  // }
  }



  return (
    <>
      <div className="container Contactus">
        <div className="container">
          <div className="row my-5">
            <ToastContainer/>
            <div className="col-md-3 "></div>
            <div className="col-md-6 border border-3 border-black p-3 py-5 rounded-5 text-center">
              <h1 className="h1">Contact Us</h1>
              <input
                className="form-control brd mt-4 p-2 "
                type="text"
                name="FirstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter ur First Name"
              />

              <input
                type="text"
                className="form-control  mt-4 p-2"
                name="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter ur Last Name"
              />
              <br />

              <input
                type="number"
                className="form-control mt-2 p-2"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter ur Phone Number"
              />
              <br />
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  value={comment}
                  placeholder="Leave a comment here"
                  onChange={(e)=>setComment(e.target.value)}
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <div className="row">
                <div className="col-md-12 text-center">
                  <button className="btn btn-warning mt-4 fs-4 px-5"  onClick={handleAction} >Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
