import axios from 'axios';
import { useState } from 'react';
import { useRef } from 'react';

function Login() {
  const [user, setUser] = useState(null);
  const username = useRef();
  const password = useRef();

  function onSubmit(e) {
    e.preventDefault();
    const userCredentials = {
      username: username.current.value,
      password: password.current.value,
    };
    axios
      .post('http://localhost:3000/login', userCredentials)
      .then((response) => console.log('you have been logged in'));
  }

  return (
    <div>
      <form id='loginButton' onSubmit={onSubmit}>
        <input
          ref={username}
          placeholder='Enter Username'
          type='user'
          id='user'
        />
        <br></br>
        <input
          ref={password}
          placeholder='Enter password'
          type='password'
          id='password'
        />
        <br></br>
        <button type='login'>Login</button>
      </form>
    </div>
  );
}

export default Login;
