import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {

    }
    return (
        <>
        <h2>Login</h2>
        <input type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        />
        <input type="text" placeholder="password" />
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
export default Login
