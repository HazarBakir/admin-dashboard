import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { useEffect } from "react";

export function GetUser({ setEmail }) {
  const navigate = useNavigate();

  useEffect(() => {
    async function handleUser() {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (!user) {
        if (error) {
          console.error("Auth error:", error.message);
        }
        alert("Not logged in, go log in first man.");
        navigate("/");
        return;
      }
      setEmail(user.email);
    }
    handleUser();
  }, [setEmail, navigate]);

  return null;
}
