import './Register.css'
import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {toast} from 'react-toastify'
import { userRegister } from '../api/fetchApi';
import { useNavigate } from 'react-router-dom';


function Register() {

    const [user,setUser]=useState({
        username:"",email:"",password:""
    })

    const navigate=useNavigate()

    const formSubmit=()=>{
        const {username,email,password}=user
        if(!username || !email || !password){
            toast("invalid input")
        }
        else{
            userRegister(user).then((res)=>{
                console.log(res.data);
                toast("Registration successsful")
                navigate('/login')
            })
        }
    }

    console.log(user);
    

    return (
        <div className='w-100 m-5 d-flex justify-content-center align-items-center'>
            <div id="regdiv2" className='w-50 p-5 border shadow'>
                <h3 className='text-center'>Register</h3>
            <FloatingLabel controlId="floatingUsername" label="Username" className="mb-3">
                <Form.Control type="text" placeholder="name" onChange={(e)=>{setUser({...user,username:e.target.value})}}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
                <Form.Control type="email" placeholder="email" onChange={(e)=>{setUser({...user,email:e.target.value})}}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control type="password" placeholder="Password" onChange={(e)=>{setUser({...user,password:e.target.value})}}/>
            </FloatingLabel>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-success' onClick={formSubmit}>Register</button>
            </div>
            </div>
        </div>
    )
}

export default Register