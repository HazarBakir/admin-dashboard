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
        <h2>Welcome {email} </h2>
        <div className="admin-credential-container">
          <AdminEmailForm
            newEmail={newEmail}
            setNewEmail={setNewEmail}
            onSubmit={changeEmail}
          />
        </div>
        <button
          onClick={() => {
            Logout(navigate);
          }}
        >
          Log out.
        </button>
      </div>
    </>
  );
}
