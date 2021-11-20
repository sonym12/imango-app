import React, { useState } from "react";
import "./Register.css";
import { auth } from "../Firebase";
import { login } from "../features/UserSlice";
import { useDispatch } from "react-redux";

function Register() {
  // const history = useHistory("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const dispatch = useDispatch();

  const register = (event) => {
      event.preventDefault();
      auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
          if(auth.user) {
              auth.user.updateProfile({
                  displayName: name
              }).then((s) => {
                dispatch(login({
                  email: auth.user.email,
                  uid: auth.user.uid,
                  displayName:name
                }));
                  // history.push("/")
              } )
              .catch((e) => {
                alert(e.message);
            })
          }
      })
  }

  return (
    <div className="register">
      <div className="register__container">
        <h1>Create a new account</h1>
        <form>
          <center>
            <input
              type="name"
              onChange={(e) => setName(e.target.value)}
              className="register__name"
              placeholder="name"
            />
          </center>
          <center>
            <input
            onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="register__name"
              placeholder="Email"
            />
          </center>
          <center>
            <input
            onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="register__name"
              placeholder="password"
            />
          </center>
          <center>
            <button
              onClick={register}
              type="submit"
              className="register__register"
            >
              Create
            </button>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Register;
