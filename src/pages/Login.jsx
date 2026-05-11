import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    const success = login(user, pass);
    if (success) nav("/admin");
    else alert("Wrong login 💀");
  };

  return (
    <div className="login">
      <h2>Admin Login 🔐</h2>

      <input placeholder="username" onChange={(e) => setUser(e.target.value)} />
      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPass(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}