import React , {useState} from "react";
import Home from "../pages/Home";
import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { Routes, Route, Navigate } from "react-router-dom";

// import "../styles/wallet.css";
import "../styles/log.css";

const Login = () => {

  const [loginUser , setLoginUser] = useState({});

 
  
  const navigate = useNavigate();
  const [user, setUser] = useState({
     email: "", password: ""
  });

  let name, value;
  const handleInput = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]:value });
  }


   const login = () => {
    axios.post("http://localhost:9002/login" , user)
    .then(res => {
      if( alert(res.data.message) == "Authentication Failed")
      alert(res.data.message)
      setLoginUser(res.data.user)
      navigate("/")
      
    })
     
   
   }
//    <Route exact path = "/">
//    {
//      user && user._id ?  <Home /> :  <Login setLoginUser= {setLoginUser} />

//    }
//  </Route>


  return (
    
     <div>
        {console.log("user" , user)}

      
    <div className="body">
       <div className="main">  	
		<input type="checkbox" id="chk" className="input" aria-hidden="true" />
       <div className="signup">
			
					<label for="chk" aria-hidden="true" className="lab">Login</label>
					<input type="email" name="email" value = {user.email}className="input" onChange={handleInput} placeholder="Email" required="" />
					<input type="password" name="password" className="input" value={user.password} onChange={handleInput} placeholder="Password" required="" />
                    <div class = "divButton">
					<button id="button" onClick={login} >Login</button>
          <div>or</div>
      <button id="button" onClick={()=> navigate("/Signup")} >Sign Up</button>
                    
                    </div>
	
			</div>
            
              
            

			
            </div>
            </div>
            </div>
  );
};

export default Login;
