import { AdminLogoutButton } from "./AdminLogout";


export function AdminSidebar({navigate}) {
  return (
    <aside className="admin-sidebar">
      <h3>Admin Panel</h3>
      <hr/>
      <ul>
        <li>
          <a href="">Configuration</a>
        </li>
        <li>
          <a href="">User Settings-mock</a>
        </li>
        <li>
          <a href="">Settings-mock</a>
        </li>
      </ul>
      <AdminLogoutButton navigate={navigate} />
    </aside>
  );
}
