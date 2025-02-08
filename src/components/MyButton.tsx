import React from "react"
import styles from "../styles/MyButton.module.css"

interface ButtonProps {
    icon: string;
    name: string;
    link: string;
}

function MyButton({icon, name, link}: ButtonProps){
    const handleClick = () =>{
        window.location.href = link;
    };
    
    return <button className={styles.errorButton} onClick={handleClick}>
        <img src={require('../resources/' + icon)} alt={name} className={styles.buttonIcon} />
        {name}
    
    </button>    
}

export default MyButton