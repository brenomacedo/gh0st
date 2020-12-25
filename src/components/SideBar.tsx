import styles from '../styles/sidebar.module.css'

interface SideBarProps {
    active: boolean
}

export default function SideBar({ active }: SideBarProps) {
    return (
        <div className={styles.sideBar} style={{ left: active ? 0 : -300 }}>
            <p className={styles.sideBarTitle}>Welcome, admin!</p>
            <div className={styles.options}>
                <div className={styles.option}>
                    <p className={styles.optionDesc}>Home</p>
                </div>
                <div className={styles.option}>
                    <p className={styles.optionDesc}>Create a post</p>
                </div>
                <div className={styles.option}>
                    <p className={styles.optionDesc}>View all posts</p>
                </div>
                <div className={styles.option}>
                    <p className={styles.optionDesc}>Logout</p>
                </div>
            </div>
        </div>
    )
}