import { AdminLogoutButton } from "./AdminLogout";
import "./Header.css";

export function AdminHeader({ email, navigate }) {
  return (
    <header className="admin-header">
      <h3>
        Welcome <em>{email}</em>
      </h3>
      <AdminLogoutButton navigate={navigate} />
    </header>
  );
}
