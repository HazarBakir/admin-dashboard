export function ChangeCredentials({ newCredential, setNewCredential, onSubmit, header, paragraph}) {
  return (
    <div className="change-credential-container">
      <form onSubmit={onSubmit}>
        <h4>{header}</h4>
        <p>
          {paragraph}
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