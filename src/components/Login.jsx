import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = ({setIsAuth}) => {

   const [user, setUser] = useState("");
   const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user == "user" && password == "pass") {
            setIsAuth(true);
            navigate("/protected");
        } else {
            alert("credenciales son incorrectas");
            setUser("");
            setPassword("");
        }
    }

  return (
    <div>
       <form type="submit" onSubmit={handleSubmit}>
            <input type="text" placeholder="user" value={user} onChange={(e) => setUser(e.target.value)}/>
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Login</button>
       </form>
    </div>
  )
}

export default Login