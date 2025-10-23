import { useState } from "react";
import { supabase } from "../../supabaseClient";
import { AdminEmailForm } from "../../components/AdminEmailForm";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../components/Logout";

export function Admin() {
  const [email, setEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const navigate = useNavigate();

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
        <button onClick={() => Logout(navigate)}>Log out.</button>
      </div>
    </>
  );
}
