import axios from 'axios';
import { useState } from 'react';
import { useRef } from 'react';

function Login() {
  const [user, setUser] = useState(null);
  const username = useRef();
  const password = useRef();

  const loginUser = async () => {
    try {
      const response = await axios.get('http://localhost:3000/login');
      setUser(response.data);
    } catch (error) {
      console.error('error getting user logged in', error);
    }
  };
  return (
    <div>
      <button onClick={loginUser}>Login</button>
      <input
        ref={username}
        placeholder='Enter Username'
        type='user'
        id='user'
      />
      <input
        ref={password}
        placeholder='Enter password'
        type='password'
        id='password'
      />
    </div>
  );
}

export default Login;
