import styles from '../../../../styles/allposts.module.css'
import { FiEdit, FiDelete } from 'react-icons/fi'

export default function All() {
    return (
        <div className={styles.container}>
           <p className={styles.all}>All posts</p>
           <div className={styles.posts}>
               <div className={styles.post}>
                    <div className={styles.edit}>
                        <FiEdit size={20} color='black' />
                    </div>
                    <div className={styles.delete}>
                        <FiDelete size={20} color='white' />
                    </div>
                    <div className={styles.postImage}></div>
                    <div className={styles.title}>
                        Post title
                    </div>
               </div>
           </div>
        </div>
    )
}