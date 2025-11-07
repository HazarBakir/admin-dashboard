import "./Admin.css";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";
import { RequireUserCheck } from "../../hooks/useAuth";
import { GetUser } from "../../hooks/useUser";
import { AdminSidebar } from "../../components/Admin/AdminSideBar";
import { Configuration } from "../../components/Admin/AdminConfiguration";
import { AdminHeader } from "../../components/Admin/Header";

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
    try {
      const { data, error } = await supabase.auth.updateUser({
        email: newEmail,
      });

      if (error) {
        console.error("Error updating email:", error.message);
        alert("Error updating email: " + error.message);
        return;
      }
      if (data) {
        console.warn("Email update successful:", data);
        alert(
          "Email update successful! Please check your new email to confirm the change."
        );
      }
    } catch (err) {
      console.error("Unexpected error updating email:", err);
      alert("Unexpected error updating email.");
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <GetUser setEmail={setEmail} />
      <div className="admin-container">
        <AdminHeader email={email} navigate={navigate} />
        <AdminSidebar />
        <Configuration
          newCredential={newEmail}
          setNewCredential={setNewEmail}
          onSubmit={changeEmail}
        />
      </div>
    </>
  );
}
