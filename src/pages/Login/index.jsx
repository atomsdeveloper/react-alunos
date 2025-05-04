export default function Login() {
  return (
    <div className="card">
      <h1>Login</h1>
      <form action="http://localhost:3000/login" method="POST">
        <input type="text" name="username" placeholder="Username" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
