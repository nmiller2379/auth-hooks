import React from "react";
import LoginHooks from "../components/LoginHooks";
import LogoutHooks from "../components/LogoutHooks";
import Books from "./Books";

function Login() {
    return (
      this.state.loggedIn ? 
      <div>
            <Books />
            <LogoutHooks />
      </div>
      :
      <LoginHooks />
    );
  }
  
  export default Login;