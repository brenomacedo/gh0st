import { FormEvent, useCallback, useRef } from 'react'
import styles from '../../styles/login.module.css'

export default function Login() {

    const login = useCallback((e: FormEvent) => {
        e.preventDefault()
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <h2 className={styles.welcome}>WELCOME BACK ADMIN</h2>
            </div>
            <div className={styles.loginform}>
                <form onSubmit={login} className={styles.form}>
                    <h2 className={styles.formtitle}>Sign in</h2>
                    <input placeholder="Email" type="text" className={styles.input}/>
                    <input placeholder="Password" type="password" className={styles.input}/>
                    <button className={styles.button}>Login</button>
                </form>
            </div>
        </div>
    )
}