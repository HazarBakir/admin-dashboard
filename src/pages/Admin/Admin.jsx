import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export function Admin() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function fetchUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setEmail(user.email);
    }
    fetchUser();
  }, []);

  return (
    <>
      <div className="admin-container">
        <h2>Welcome {email} </h2>
      </div>
    </>
  );
}
