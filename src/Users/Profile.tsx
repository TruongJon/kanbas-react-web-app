import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Profile() {
  const [profile, setProfile] = useState({ username: "", password: "", 
    firstName: "", lastName: "", dob: "", email: "", role: "USER" });
  const navigate = useNavigate();
  const fetchProfile = async () => {
    const account = await client.profile();
    setProfile(account);
  };
  const save = async () => {
    await client.updateUser(profile);
  };
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Account/Signin");
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div>
      <h1>Profile</h1>
      {profile && (
        <div>
          <h5> Username </h5>
          <input className="form-control w-25" value={profile.username} onChange={(e) =>
            setProfile({ ...profile, username: e.target.value })}/>
          <h5> Password </h5>
          <input className="form-control w-25" value={profile.password} onChange={(e) =>
            setProfile({ ...profile, password: e.target.value })}/>
          <h5> First Name </h5>
          <input className="form-control w-25" value={profile.firstName} onChange={(e) =>
            setProfile({ ...profile, firstName: e.target.value })}/>
          <h5> Last Name </h5>
          <input className="form-control w-25" value={profile.lastName} onChange={(e) =>
            setProfile({ ...profile, lastName: e.target.value })}/>
          <h5> Date of Birth </h5>
          <input className="form-control w-25" value={profile.dob} type="date" onChange={(e) =>
            setProfile({ ...profile, dob: e.target.value })}/>
          <h5> Email </h5>
          <input className="form-control w-25" value={profile.email} onChange={(e) =>
            setProfile({ ...profile, email: e.target.value })}/>
          <h5> Role </h5>
          <select 
            className="form-select w-25"
            onChange={(e) =>
              setProfile({ ...profile, role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <br/>
          <div className="btn-group-vertical w-25">
            <button className="btn btn-primary" onClick={save}>Save</button>
            <button className="btn btn-danger" onClick={signout}>Sign Out</button>
            <Link to="/Kanbas/Account/Admin/Users"
              className="btn btn-warning">
              Users
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
