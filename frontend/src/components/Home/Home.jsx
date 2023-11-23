import Login from "../Login/Login";
import { useState } from "react";

const Home = () => {
    const [estadoSession, setEstadoSession] = useState(localStorage.getItem('session')==='true');
    const out=()=>{
        let sess=false
        localStorage.setItem('session',sess.toString());
        setEstadoSession(sess)
    }
    return (
      
        <>
        {estadoSession?<div>
        <div>You are logged</div>
        <button onClick={out}>Log Out</button>
        </div>:<Login/>}
        </>
    );
}

export default Home;