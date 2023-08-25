import React, { useState } from 'react';

import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    toast.success('Registration successful');
    navigate('/login');
  };

  const isPasswordValid = () => {
    return password.length >= 8 && password === confirmPassword;
  };

  return (
    <div className='p-5 text-white text-center' style={{display:'block', width:'500px', margin:'40px 500px', background:'rgb(143, 23, 79)'}}>
      <h2 className='my-3'>Registration</h2>
      <input
      className='w-100 mb-3'
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
      className='w-100 mb-3'
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
      className='w-100 mb-3'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
      className='w-100 mb-5'
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button className='btn btn-success' onClick={handleRegister} >
        Register
      </button>
    </div>
  );
};

export default RegisterPage;
