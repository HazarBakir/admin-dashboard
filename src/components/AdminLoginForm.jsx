export function AdminLoginForm({
  email,
  setEmail,
  password,
  setPassword,
  loading,
  onLogin,
}) {
  return (
    <form onSubmit={onLogin}>
      <input
        type="text"
        className="admin-login-email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="please enter your email"
        required
      />
      <br />
      <input
        type="password"
        className="admin-login-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="please enter your password"
        required
        minLength={6}
      />
      <br />
      <input
        type="submit"
        value="Log in"
        className="admin-login-submit"
        disabled={loading}
      />
    </form>
  );
}
