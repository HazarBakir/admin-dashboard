import { AdminEmailForm } from "./AdminEmailForm";

export function AdminHeader({ newEmail, setNewEmail, changeEmail }) {
  return (
    <div className="admin-header">
      <div className="admin-credential-container">
        <h3>Configuration</h3>
        <AdminEmailForm
          newEmail={newEmail}
          setNewEmail={setNewEmail}
          onSubmit={changeEmail}
        />
      </div>
    </div>
  );
}
