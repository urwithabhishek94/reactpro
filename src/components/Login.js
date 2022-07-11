import React, { Component } from 'react';
import { Navigate } from 'react-router-dom'
export default class Login extends Component {
    constructor(props){
        super(props)
        let loggedIn = false
        this.state = {
            username: "",
            password: "",
            loggedIn
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    onChange(e)
    {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state.username)
    }
    submitForm(e)
    {
        e.preventDefault()
        const { username, password } = this.state
        if(username === "admin" && password === "admin@123")
        {
        sessionStorage.setItem('token', 'abhishek')
          this.setState({
            loggedIn: true
          })  
        }
        console.log()
    }
    render() {
        if(this.state.loggedIn){
            return <Navigate to="/posts" />
        }
        return(
            <div className='container my-5'> <br />
                <h3 className=''>Please Log In</h3>
                <form onSubmit={this.submitForm}>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="text" className="form-control"
                         id="exampleInputEmail1"
                        aria-describedby="emailHelp" 
                        value={this.state.username}
                        onChange={this.onChange}
                        name="username"
                        placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-dark">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control"
                         id="exampleInputPassword1" placeholder="Password"
                         value={this.state.password}
                         name="password"
                         onChange={this.onChange}
                          />
                    </div>
                    <button type='submit' className="btn btn-primary" >Submit</button>
                    {/* <input type="submit" className="btn btn-primary"   /> */}
                </form>
            </div>
               
        )
    }
}
// // import axios from 'axios';

//  const Login = () =>{
//     return(
//     <div className='container my-5'>
//          <h1>Please Log In</h1>
//         <form>
//         <div className="form-group">
//             <label for="exampleInputEmail1">Email address</label>
//             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
//             <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//         </div>
//         <div className="form-group">
//             <label for="exampleInputPassword1">Password</label>
//             <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//         </div>
//     )
//  }

// export default Login;