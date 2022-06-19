import React from "react";

function SignUp() {
  return (
    <div className="div">
      <form>
        <label for="enterUN">"User Name"</label>
        <input type="text" id="enterUN"></input>
        <label for="enterPW">Password</label>
        <input type="text" id="enterPW"></input>
        <input type="submit" id="register" value="submit"></input>
      </form>
    </div>
  );
}

export default SignUp;
