export function ChangeCredentials({ newCredential, setNewCredential, onSubmit }) {
  return (
    <div className="change-credential-container">
      <form onSubmit={onSubmit}>
        <h4>Change your credentials</h4>
        <p>
          You will receive a confirmation email at your new credential. The change
          will only take effect after you confirm the new credential.
        </p>
        <input
          type="text"
          className="new-credential"
          value={newCredential}
          onChange={(e) => setNewCredential(e.target.value)}
          placeholder="please enter your new credential to change"
          required
        />
        <input
          type="submit"
          value="Change the credentials"
          className="admin-submit"
        />
      </form>
    </div>
  );
}