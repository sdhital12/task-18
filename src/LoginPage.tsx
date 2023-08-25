import 'react-toastify/dist/ReactToastify.css';

import * as Yup from 'yup';

import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { Card } from 'react-bootstrap';
import React from 'react';
import { useFormik } from 'formik';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = async () => {
    // Simulate a delay before showing the success toast and navigating
    setTimeout(() => {
      toast.success('Login successful');
      navigate('/home');
    }, 1000);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    
    <Card
       style={{width:'500px', justifyContent:'center', textAlign:'center', margin:'50px 500px',background:'rgb(143, 23, 79)'}}

   
    key={'dark'}
    className="mb-2 shadow-lg border-0 rounded-lg mt-5  text-white ">

    <Card.Header ><h3 className="my-4  ">Login</h3></Card.Header>
    <Card.Body style={{display:'block'}}>
      <form onSubmit={formik.handleSubmit}>
        <div className='row'>
          <div className='col-lg-3'> <label className='me-3' htmlFor="email">Email:</label></div>
          
         <div className='col-lg-8 offspan'>
           <input
           className='w-100 mb-3'
            type="email"
            id="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <div>{formik.errors.email}</div>
          )}</div>
         
        </div>

        <div className='row'>
          <div className='col-lg-3'>
          <label className='me-3' htmlFor="password">Password:</label></div>
          <div className='col-lg-8 offspan'>
          <input
          className='w-100 mb-3'
            type="password"
            id="password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password && (
            <div>{formik.errors.password}</div>
          )}
          </div>
        </div>
        <button className=' btn btn-success mx-5 text-white'  type="submit">Login</button>
        <p>Dont't have account?</p>
        <NavLink className='text-white' to={'/register'}>Register here</NavLink>
      </form>
      <ToastContainer />
      </Card.Body>
      </Card>
  );
};

export default LoginPage;
