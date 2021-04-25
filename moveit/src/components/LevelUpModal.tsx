import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/LevelUpModal.module.css";

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext);

    //provisional code
    const text = `Avancei%20para%20o%20pr%c3%b3ximo%20level!%20Agora%20sou%20level%20${level}!`;
    const url = window.location.href;
    const hashtags = `moveit,nlw4,rocketseat`;
    const SHARE_URL = `https://twitter.com/share?text=${text}&url=${url}&hashtags=${hashtags}`;

    function shareProgress() {
        window.open(SHARE_URL);
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar modal" />
                </button>

                <footer>
                    <button 
                        type="button"
                        className={styles.twitterShare}
                        onClick={shareProgress}
                    >
                        Compartilhar no Twitter
                        <img src="/icons/twitter.svg" alt="Twitter" />
                    </button>
                </footer>
            </div>
        </div>
    );
}