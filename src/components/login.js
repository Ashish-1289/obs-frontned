import React, { useState } from 'react'
import validateEmail from './utils';
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from '../redux/login/loginActions';
const Login = () => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [error , setError] = useState('')
    const dispatch = useDispatch();

    const handleLoginSubmit= ()=>{
      setError(''); 
      if (!validateEmail(email)) {
        setError('Please enter a valid email address.');
        return;
      }
      if (!password) {
        setError('Password cannot be empty.');
        return;
      }
      dispatch(loginRequest({email , password}));
        
    }
  return (
    <>
    <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input value={email} type="text" readonly class="form-control-plaintext" id="staticEmail" onChange={(e) => setEmail(e.target.value)}/>
      
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input value = {password} type="password" class="form-control" id="inputPassword" onChange={(e) => setPassword(e.target.value)}/>
    </div>
  </div>
  {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
  <button onClick={handleLoginSubmit}> Submit </button>
  <a href='/register'>register for a new account</a>
  </>
  )
}

export default Login
