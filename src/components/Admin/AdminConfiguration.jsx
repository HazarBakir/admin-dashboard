import { ChangeEmail } from "./AdminChangeForm";

export function Configuration({ newEmail, setNewEmail, changeEmail }) {
  return (
    <div className="admin-configuration">
      <h2>Configuration</h2>
      <p>
        Here you can update your account email. Enter your new email address
        below and submit the form to change your contact information.
      </p>
      <ChangeEmail
        newEmail={newEmail}
        setNewEmail={setNewEmail}
        onSubmit={changeEmail}
      />
    </div>
  );
}
