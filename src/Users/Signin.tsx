import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<User>({ _id: "",
    username: "", password: "", firstName: "", lastName: "", role: "USER"
  });
  const navigate = useNavigate();
  const signin = async () => {
    try {
      await client.signin(credentials);
      navigate("/Kanbas/Account/Profile");
    } catch (err) {
        alert("Login credentials are invalid.");
    }
  };
  return (
    <div>
      <h1>Sign In</h1>
      <div className="form-group w-25">
        <input className="form-control" value={credentials.username} onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })}/>
        <input className="form-control" value={credentials.password} onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })}/>
      </div>
      <button className="btn btn-primary" onClick={signin}> Sign In </button>
      <button className="btn btn-warning" onClick={() => navigate("/Kanbas/Account/Signup")}> Click here to register </button>
    </div>
  );
}
