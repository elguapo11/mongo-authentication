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
  }

  return (
    <div>
      <br></br>
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
      <button onClick={loginUser}>Login</button>
    </div>
  );
}

export default Login;
