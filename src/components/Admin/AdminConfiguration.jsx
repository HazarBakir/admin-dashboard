import { ChangeCredentials } from "./AdminChangeForm";

export function Configuration({ newCredential, setNewCredential, onSubmit }) {
  return (
    <div className="admin-configuration">
      <h2>Configuration</h2>
      <p>
        Here you can update your account credentials. Enter your new credentials
        below and submit the form to change your credentials.
      </p>
      <ChangeCredentials
        newCredential={newCredential}
        setNewCredential={setNewCredential}
        onSubmit={onSubmit}
        header="Change your email address"
        paragraph="You will receive a confirmation email at your new email address. The change will only take effect after you confirm the new email address."
      />
    </div>
  );
}
