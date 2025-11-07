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
      />
    </div>
  );
}
