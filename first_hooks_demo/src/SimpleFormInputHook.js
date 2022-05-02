import React from "react";
import useInputState from "./hooks/useInputState";

function SimpleFormInputHook() {
  const [email, updateEmail, resetEmail] = useInputState("");
  const [password, updatePassword, resetPassword] = useInputState("");

  return (
    <div>
      <h1>
        Email is: {email} & Password is: {password}
      </h1>
      <div>
        <input type="text" value={email} onChange={updateEmail} />
        <button onClick={resetEmail}>Reset Email</button>
      </div>
      <div>
        <input type="text" value={password} onChange={updatePassword} />
        <button onClick={resetPassword}>Reset Password</button>
      </div>
    </div>
  );
}

export default SimpleFormInputHook;
