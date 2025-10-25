import "./Admin.css";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { AdminEmailForm } from "../../components/AdminEmailForm";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../components/Logout";
import { RequireUserCheck } from "../../components/checkUser";
import { GetUser } from "../../components/GetUser";

export function Admin() {
  const { isAuthenticated, isLoading } = RequireUserCheck();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, isLoading, navigate]);

  async function changeEmail(e) {
    e.preventDefault();
    const { data, error } = await supabase.auth.updateUser({
      email: newEmail,
    });

    if (error) {
      console.error("Error updating email:", error.message);
      return;
    }
    if (data) {
      console.warn("Email update successful:", data);
    }
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <GetUser setEmail={setEmail} />
      <div className="admin-container">
        <aside className="admin-sidebar">
          <h3>Menu</h3>
          <ul>
            <li>
              <a href="">Dashboard</a>
            </li>
            <li>
              <a href="">User Settings</a>
            </li>
            <li>
              <a href="">Settings</a>
            </li>
          </ul>
          <button
            className="admin-logout-btn"
            onClick={() => {
              Logout(navigate);
            }}
          >
            Log out
          </button>
        </aside>
        <div className="admin-header">
          <h2 className="admin-welcome">Welcome {email}</h2>
          <div className="admin-credential-container">
            <h3>Configuration</h3>
            <AdminEmailForm
              newEmail={newEmail}
              setNewEmail={setNewEmail}
              onSubmit={changeEmail}
            />
          </div>
        </div>
      </div>
    </>
  );
}
