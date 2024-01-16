import { useState } from "react";
import "../api_interface/UserInterface";
import { FormEvent } from "react";
import { GetLogin, Login } from "../api_interface/UserInterface";
import { NavLink } from "react-router-dom";

//Todo PasswordHash


function LoginComponent() {

    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");

    const HandleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const result = await Login(Email,Password);
        if (result.BackEndResponseStatus === 200){
            GetLogin(result.UserID);
        }
    }

    return <>
        <form onSubmit={HandleSubmit} className="p-3 m-3" style={{height: "calc(100vh - 9rem)"}}>
        <div className="row justify-content-center w-100">                
                <div className="col-4">
                <h1>Login</h1>
                    <div className="mb-3 form-floating">                
                        <input 
                            value={Email}
                            onChange={(e) => SetEmail(e.target.value)}
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="example@email.com"/>
                        <label htmlFor="email">Email address</label>
                    </div>            
                    
                    <div className="mb-3 form-floating">                
                        <input value={Password} onChange={(e) => SetPassword(e.target.value)} type="password"
                            id="password"
                            className="form-control"
                            placeholder=""/>
                        <label htmlFor="password">Password</label>
                    </div>      

                    <div className="row">
                        <div className="col">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </div>    
                    <div className="row">                    
                        <div className="col text-center m-3">
                            <NavLink to="/register">Don't have an account? Register here.</NavLink>        
                        </div>                        
                    </div>                    
                </div>  
            </div>
        </form>        
    </>
}

export default LoginComponent;