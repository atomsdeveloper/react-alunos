import { Title } from './styled';

export default function Login() {
  return (
    <div className="card">
      <Title $isRed={true}>Login</Title>
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
