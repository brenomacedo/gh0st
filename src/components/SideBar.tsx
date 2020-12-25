import { useCallback, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import styles from '../styles/sidebar.module.css'



export default function SideBar() {

    const [active, setActive] = useState(false)

    const toggleSideBar = useCallback(() => {
        setActive(!active)
    }, [active])

    return (
        <>
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
            <div onClick={toggleSideBar} className={styles.sideBarButton}>
                {active ? <FiX color='white' size={25} /> : <FiMenu color='white' size={25} />}
            </div>
        </>
    )
}