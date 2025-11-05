import { AdminEmailForm } from "./AdminEmailForm";

export function Configuration({ newEmail, setNewEmail, changeEmail }) {
  return (
    <div className="admin-configuration">
      <h3>Configuration</h3>
      <AdminEmailForm
        newEmail={newEmail}
        setNewEmail={setNewEmail}
        onSubmit={changeEmail}
      />
    </div>
  );
}
