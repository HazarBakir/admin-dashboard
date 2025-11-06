export function ChangeEmail({ newEmail, setNewEmail, onSubmit }) {
  return (
    <div className="change-email-container">
      <form onSubmit={onSubmit}>
        <h4>Change your email</h4>
        <p>
          You will receive a confirmation email at your new address. The change
          will only take effect after you confirm the new email.
        </p>
        <input
          type="text"
          className="new-credential"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="please enter your email to change"
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
