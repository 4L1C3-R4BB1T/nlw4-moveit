import Link from "next/link";

import { useContext, useState } from "react";
import { LoginContext } from "../contexts/LoginContext";

import styles from "../styles/components/LoginBox.module.css";

export default function LoginBox() {
    const { fetchUserData } = useContext(LoginContext);
    const [isEmpty, setIsEmpty] = useState(true);

    function searchGithubUser() {  
        const username = document.querySelector('input').value; 
        if (username != "") {
            fetchUserData(username);
        } else {
            let input = document.querySelector('input')
            input.classList.add(styles.validate);
            input.focus();
        }
    }

    function validateField() {
        if (document.querySelector('input').value != "") {
            setIsEmpty(false);
        } else {
            setIsEmpty(true);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.loginContainer}>
                <header>
                    <img src="/logo-white.svg" alt="Logo move.it" />
                </header>

                <strong>Bem-vindo</strong>

                <div className={styles.githubMessage}>
                    <img src="/icons/github.svg" alt="Github icon" />
                    <p>Faça login com seu Github <br /> para começar</p>
                </div>

                <div className={styles.insertName}>
                    <input type="text" placeholder="Digite seu username" onChange={validateField} />
                    
                    {isEmpty ? (
                        <button onClick={searchGithubUser}>
                            <img src="/icons/arrow.svg" alt="Seta" />
                        </button>
                    ) : (
                        <Link href="/home">
                            <button onClick={searchGithubUser}>
                                <img src="/icons/arrow.svg" alt="Seta" />
                            </button>
                        </Link>  
                    )}        
                </div> 

                <Link href="/home">
                    <p>Entrar sem Github</p>  
                </Link>             
            </div>
        </div>
    );
}