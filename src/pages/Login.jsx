import React,{useState} from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { userLogin } from '../api/fetchApi';
import { toast } from 'react-toastify';


function Login() {

    const [user,setUser]=useState({
            username:"",password:""
        })

    const formSubmit=()=>{
         const {username,password}=user
                if(!username || !password){
                    toast("invalid input")
                }
                else{
                    userLogin(user).then((res)=>{
                        console.log(res.data);
                        sessionStorage.setItem("token",res.data.token)
                        toast("Login successsful")
                        
                    })
                }
    }
        

  return (
    <div className='w-100 m-5 d-flex justify-content-center align-items-center'>
    <div id="regdiv2" className='w-50 p-5 border shadow'>
        <h3 className='text-center'>Login</h3>
    <FloatingLabel controlId="floatingUsername" label="Username" className="mb-3">
        <Form.Control type="text" placeholder="name" onChange={(e)=>{setUser({...user,username:e.target.value})}}/>
    </FloatingLabel>

    <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
        <Form.Control type="password" placeholder="Password" onChange={(e)=>{setUser({...user,password:e.target.value})}}/>
    </FloatingLabel>
    <div className='d-flex justify-content-center'>
        <button className='btn btn-success' onClick={formSubmit}>Login</button>
    </div>
    </div>
</div>
  )
}

export default Login