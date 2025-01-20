import React from "react"

interface ButtonProps {
    name: string;
    link: string;
}

function Button({name, link}: ButtonProps){
    const handleClick = () =>{
        window.location.href = link;
    };
    
    return <button onClick={handleClick}>{name}</button>    
}

export default Button