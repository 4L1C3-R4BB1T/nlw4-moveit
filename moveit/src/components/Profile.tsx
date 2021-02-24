import styles from "../styles/components/Profile.module.css";

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/68361379?s=460&u=468efe4c1ee4ad072134e079f4c9228e0d06ecec&v=4" alt="Livia G." />
            <div>
                <strong>Livia G.</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}