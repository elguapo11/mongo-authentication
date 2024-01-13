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
