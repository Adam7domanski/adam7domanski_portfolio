import React from "react"
import styles from "../styles/MyButton.module.css"

interface ButtonProps {
    name: string;
    link: string;
}

function MyButton({name, link}: ButtonProps){
    const handleClick = () =>{
        window.location.href = link;
    };
    
    return <button className={styles.errorButton} onClick={handleClick}>{name}</button>    
}

export default MyButton