export function AdminHeader({ newEmail, setNewEmail, changeEmail }) {
  return (
    <div className="admin-header">
      <h3>Configuration</h3>
      <div className="admin-credential-container">
        <AdminEmailForm
          newEmail={newEmail}
          setNewEmail={setNewEmail}
          onSubmit={changeEmail}
        />
      </div>
    </div>
  );
}
