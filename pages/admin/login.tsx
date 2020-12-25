import styles from '../../styles/login.module.css'

export default function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <h2 className={styles.welcome}>WELCOME BACK ADMIN</h2>
            </div>
            <div className={styles.loginform}></div>
        </div>
    )
}