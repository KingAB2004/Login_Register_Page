import React from "react";
import kingAB from './kingAB.jpg';
import axios from "axios";

export default function Register(props){
    const [name ,setname]=React.useState("")
    const [email ,setemail]=React.useState("")
    const [pass ,setpass]=React.useState("")
    const [registered, setRegistered] = React.useState(false);


    function handleChange1(text){
        setemail(text.target.value)
        }
    function handleChange2(text){
            setname(text.target.value)
            }
    function handleChange3(text){
                setpass(text.target.value)
        }
        const buttonuse= async()=>{
            setRegistered(true);
            await axios.post('http://localhost:5000/kingAB' ,{
                "username":name,
                "email":email,
                "password":pass
            })
            
        }
    
    return(
        <div>
            <div className="header" >
            <img src={kingAB} alt="King AB" className="kingab" />
            <h3>kingAB</h3>
            </div>
            <div className="box_container">

            <div className="box">
                <h1>Register</h1>
      <div className="filler">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange2}
          />
      </div>

      <div className="filler">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange1}
          />
      </div>

      <div className="filler">
        <label>Password:</label>
        <input
        type="password"
        name="password"
        value={pass}
        onChange={handleChange3}
        
        />
      </div>

      <button type="submit"  value="Register" onClick={buttonuse} >Register</button>
      {registered && <h3>You have Registered</h3>}
      <h5 onClick={()=>{
            props.change()
      }}>Login</h5>
            </div>
        </div>
        </div>
    )
}