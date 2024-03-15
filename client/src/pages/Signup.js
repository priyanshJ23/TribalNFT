import React, { useState } from "react";

import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import Login from "../pages/Login";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";


// import "../styles/wallet.css";
import "../styles/log.css";

const Signup = () => {

  const [user, setUser] = useState({
    name: "", email: "", password: "",
  });

  let name, value;
  const handleInput = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]:value });
  }

   const register = () => {
    const {name, email ,password}  = user
    if(name && email && password) {
      axios.post("https://tribalnft.onrender.com/Signup", user)
      .then(res => console.log(res))
    } else{
      alert("invalid input")
    }
    
    
   }
  return (



    <div>
    
       {console.log ("User" , user)}

      <div className="body">
        <div className="main">
          <input type="checkbox" id="chk" className="input" aria-hidden="true" />
          <div className="signup">
          
              <label for="chk" aria-hidden="true" className="lab" >Sign up</label>
              <input type="text" name="name" className="input" placeholder="Name" value={user.Name} onChange={handleInput}  />
              <input type="email" name="email" className="input" placeholder="Email" value={user.email} onChange={handleInput} />
              <input type="password" name="password" className="input" placeholder="Password" value={user.password} onChange={handleInput} />
              <div class="divButton">
                <button id="button" onClick={register}>Sign up</button>
              </div>
           
            <span className="extra">Already user <span><Link to="/Login">Login</Link> </span> </span>
          </div>


        </div>
      </div>
    </div>

  );
};

export default Signup;
