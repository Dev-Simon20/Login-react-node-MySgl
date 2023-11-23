import Login from "../Login/Login.jsx";
import Home from "../Home/Home.jsx";
import { useState } from "react";

function parseJwt (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
let tokenExistAndStillValid = (parseJwt(localStorage.getItem('token')).exp * 1000 > Date.now());
let estadoEs=(localStorage.getItem('session'))
// const [llave,setLlave]=useState()



const Main = () => {
    return (
        // Si el token es valido mostrara el Home
        <>
        {console.log('El estado es : ',estadoEs)}
        {console.log('El token es ',tokenExistAndStillValid)}
        {/* {tokenExistAndStillValid ? <Home /> : <Login /> } */}
        {tokenExistAndStillValid? ( <Home />) : (<Login />)}
       
        </>
    );
}

export default Main;