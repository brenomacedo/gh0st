import styles from '../../styles/panel.module.css'
import SideBar from '../../components/SideBar'
import { useCallback, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Panel() {

    const [active, setActive] = useState(false)

    const toggleSideBar = useCallback(() => {
        setActive(!active)
    }, [active])

    return (
        <div className={styles.container}>
            <SideBar active={active} />
            <div onClick={toggleSideBar} className={styles.sideBarButton}>
                {active ? <FiX color='white' size={25} /> : <FiMenu color='white' size={25} />}
            </div>
        </div>
    )
}