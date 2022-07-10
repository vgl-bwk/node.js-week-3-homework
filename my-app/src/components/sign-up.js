import { useState } from "react";
import { signUp } from "../services/auth.js";

function SignUp() {
  const [name, setName] = useState("");
  const [eMail, setEMail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="div">
      <h2>Sign Up</h2>
      <form>
        <label for="enterUN">"User Name"</label>
        <input
          type="text"
          id="enterUN"
          onChange={(event) => setName(event.target.value)}
        ></input>
        <label for="enterMail">e-mail</label>
        <input
          type="text"
          id="enterMail"
          onChange={(event) => setEMail(event.target.value)}
        ></input>
        <label for="enterPW">Password</label>
        <input
          type="password"
          id="enterPW"
          onChange={(event) => setPassword(event.target.value)}
        ></input>
      </form>
      <button id="register" onClick={() => signUp(name, eMail, password)}>
        Sign Up
      </button>
    </div>
  );
}

export default SignUp;
