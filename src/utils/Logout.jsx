import { supabase } from "../supabaseClient";

export async function Logout(navigate) {
  const { error } = await supabase.auth.signOut({ scope: "local" });
  if (error) {
    console.error("Error during logout:", error.message);
    alert("Error logging out: " + error.message);
  } else {
    navigate("/");
  }
}
