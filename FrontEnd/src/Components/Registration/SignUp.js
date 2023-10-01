import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const SignUp = () => {
    const [value, setValue] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const submitValue = (data) => {
      if (data) {
        setValue(data);
        axios.post('http://localhost:8080/student' , data)
        .then(() => {
            navigate('/');
        })
        .catch((err) => console.log(err));
       }
    }
  return (
    <div className='login template d-flex justify-content-center align-items-center w-100 vh-100'>
        <div className='40-w p-5 rounded bg-white'>
            <h3>Sign Up</h3>
            <form onSubmit={handleSubmit(submitValue)}>
                
                <div className='mb-2'>
                    <input className='form-control' placeholder='Enter Login' {...register("Login", { required: true , maxLength : 20, minLength : 7, pattern: /^[A-Za-z]+$/i})} />
                </div>
                <div className='mb-2'>
                    <input type='email' className='form-control' placeholder='Enter E-mail' {...register("Mail", { required: true , maxLength : 30})} />
                </div>
                <div className='mb-2'>
                    <input type='password' className='form-control' placeholder='Enter Password' {...register("Password", { required: true , maxLength : 20})} />
                </div>
                <div className='mb-2'>
                    <input type='date' className='form-control' placeholder='Enter Password' {...register("DateBirth", { required: true })} />
                </div>
                {errors.Login && <span className='login-err-up'>Login empty or Incorrect</span>}
                {errors.Password && <span className='pass-err-up'>Password empty or Incorrect</span>}
                {errors.Mail && <span className='email-err-up'>E-mail empty or Incorrect</span>}
                {errors.DateBirth && <span className='data-err-up'>Data Birth empty</span>}
                <input className='btn btn-primary' type="submit" value="Sign Up"/>
                <Link to={'/'}>Sign In</Link>
            </form>
        </div>
      </div>
  
  )
}

