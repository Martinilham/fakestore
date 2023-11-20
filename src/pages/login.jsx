import React, { useEffect, useState } from 'react'
import { authLogin } from '../Api'

function Login() {

    const [login,setlogin] = useState([
        {
            username:'',
            password:''
        }
    ])
    
    const masukandata = (e) =>{
        const {name,value} = e.target;
        setlogin(
        
            {...login,
                [name]:value
            }
        
    )
    }

    const submitData = (e) =>{
        e.preventDefault()
        authLogin(login)
    }


  return (
            <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
            <div className="card">
                <div className="card-header">
                <h3 className="text-center">Login</h3>
                </div>
                <div className="card-body">
                <form onSubmit={submitData}>
                    <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input 
                    name='username'
                    type="text" 
                    className="form-control" 
                    id="username" 
                    placeholder="Enter your username"
                    onChange={masukandata}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                    name='password'
                    type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Enter your password"
                    onChange={masukandata}
                    />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
  )
}

export default Login;