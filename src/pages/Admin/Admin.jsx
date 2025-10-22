import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { AdminEmailForm } from "../../components/AdminEmailForm";

export function Admin() {
  const [email, setEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");

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

  useEffect(() => {
    async function fetchUser() {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (!user) {
        console.error("No user logged in:", error);
        return;
      }

      setEmail(user.email);
    }

    fetchUser();
  }, []);

  return (
    <>
      <div className="admin-container">
        <h2>Welcome {email} </h2>
        <div className="admin-credential-container">
          <AdminEmailForm
            newEmail={newEmail}
            setNewEmail={setNewEmail}
            onSubmit={changeEmail}
          />
        </div>
      </div>
    </>
  );
}
