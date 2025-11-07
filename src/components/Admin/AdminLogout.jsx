import { Logout } from "../../utils/Logout";
import "./AdminLogout.css";

export function AdminLogoutButton({ navigate }) {
  return (
    <button
      className="admin-logout-btn"
      onClick={() => {
        Logout(navigate);
      }}
    >
      Log out
    </button>
  );
}
