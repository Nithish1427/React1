import { Link } from 'react-router-dom';
import Counter from './Counter.jsx';

function Login() {

  return (
    <>
      <Counter />

      <Link to="/">Home</Link>
      <form className="my-5" style={{ width: "50%", margin: "auto" }}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" />
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
