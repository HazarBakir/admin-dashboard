import { Logout } from "./Logout";

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

