import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';


export function Login() {

    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        if (data) {
            setData(data);
            axios.post('http://localhost:8080/signup' , data)
            .then((res) => {
                if (res.data === "Success") {
                    navigate('/user');
                } else {
                    alert("Wrong Login or Password ");
                }
            })
            .catch((err) => console.log(err)); 
           }
        reset({
            Password : ''
        })

    }
    return (
      <div className='login template d-flex justify-content-center align-items-center w-100 vh-100 bg-primary'>
        <div className='40-w p-5 rounded bg-white'>
            <h3 >Sign In</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <div className='mb-2'>
                    <input className='form-control' placeholder='Enter Login' {...register("Login", { required: true })} />
                </div>
                <div className='mb-2'>
                    <input type='password' className='form-control' placeholder='Enter Password' {...register("Password", { required: true })} />
                </div>
                {errors.Login && <span className='login-err'>Login should be not empty</span>}
                {errors.Password && <span className='pass-err'>Password should be not empty</span>}
                
                <input className='btn btn-primary' type="submit" value="Sign In"/>
                <Link to={'/signup'}>Sign Up</Link>
            </form>
        </div>
      </div>
    );
 }