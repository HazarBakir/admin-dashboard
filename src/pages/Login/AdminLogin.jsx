import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router";
import { AdminLoginForm } from "../../components/Auth/AdminLoginForm";
import { RequireUserCheck } from "../../hooks/useAuth";

export function AdminLoginPage() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = RequireUserCheck();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate("/admin");
    }
  }, [isAuthenticated, isLoading, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
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
      navigate("/admin");
    } catch (error) {
      console.error("Login Error", error);
      alert("Couldn't Log in.");
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-login-container" id="admin-login-container">
      <h1>: )</h1>
      <h3>Please Log in</h3>
      <AdminLoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        loading={loading}
        onLogin={handleLogin}
      />
    </div>
  );
}
