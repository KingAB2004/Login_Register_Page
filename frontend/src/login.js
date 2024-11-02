import React, { useEffect } from "react";
import kingAB from './kingAB.jpg';
import axios from "axios";
import $, { data } from "jquery"


export default function Login(){  
        const [email ,setemail]=React.useState("")
        const [pass ,setpass]=React.useState("")
        const [task ,settasks]=React.useState([])
        const [login ,setLogin] =React.useState(0)
        const [username ,setname] =React.useState("")
        useEffect(() => {
            const fetchData = async () => {
              try {
                const response = await axios.get('http://localhost:5000/kingAB');
                console.log("API Response:", response.data.task); 
                settasks(response.data.task);
              } catch (error) {
                console.error("Error fetching data:", error);
              }
            };
            fetchData();
          }, []);
        
            function handleClick(){
              const curr =  task.find(tasks => tasks.email===email && tasks.password===pass)
              if(curr)
              {
                setname(curr.username)
                setLogin(1);
              }
              else
              {
                setLogin(2);
              }
    }
    function handleChange1(text){
        setemail(text.target.value)
        }
    function handleChange3(text){
                setpass(text.target.value)
        }
        return (
            <div>
            <div className="header" >
            <img src={kingAB} alt="King AB" className="kingab" />
            <h3>kingAB</h3>
            </div>

            <div className="box_container">

            <div className="box">
                <h1>Login</h1>

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

      <button type="submit"  value="Login" onClick={handleClick} >Login</button>
            {login==1 && <h4>Welcome {username} </h4>}
            {login==2 && <h4>User not Found</h4>}
            </div>

        </div>
        </div>
    )
}
