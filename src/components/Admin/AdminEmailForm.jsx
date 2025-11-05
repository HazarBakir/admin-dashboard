export function AdminEmailForm({ newEmail, setNewEmail, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className="admin-email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
        placeholder="please enter your email"
        required
      />
      <input
        type="submit"
        value="Change the credentials"
        className="admin-submit"
      />
    </form>
  );
}
