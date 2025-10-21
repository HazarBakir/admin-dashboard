import {  useState } from "react";
import { supabase } from "../supabaseClient";

export function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        console.error("Login Error: ", error.message);
        alert("Couldn't Log in: " + error.message);
        setLoading(false);
        return;
      }

      console.warn("Logged in! ", data);
      alert("Logged in!");
    } catch (error) {
      console.error("Login Error", error);
      alert("Couldn't Log in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="admin-login-container" id="admin-login-container">
        <h1>: )</h1>
        <h3>Please Log in</h3>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            className="admin-login-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="please enter your email"
            required
          />
          <br />
          <input
            type="password"
            className="admin-login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="please enter your password"
            required
            minLength={6}
          />
          <br />
          <input
            type="submit"
            value="Log in"
            className="admin-login-submit"
            disabled={loading}
          />
        </form>
      </div>
    </>
  );
}
