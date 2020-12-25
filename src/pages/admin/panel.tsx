import styles from '../../styles/panel.module.css'
import SideBar from '../../components/SideBar'
import Head from 'next/head'
import { FiUser, FiMessageSquare, FiBell } from 'react-icons/fi'

export default function Panel() {

    return (
        <>
        <SideBar />
        <div className={styles.container}>
            <Head>
                <title>Panel</title>
            </Head>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <FiUser className={styles.iconCenter} size={150} color='#ff9999' />
                    <h2 className={styles.cardDesc}>Total visits: 1800</h2>
                </div>
                <div className={styles.card}>
                    <FiMessageSquare className={styles.iconCenter} size={150} color='#99ff99' />
                    <h2 className={styles.cardDesc}>Total comments: 592</h2>
                </div>
                <div className={styles.card}>
                    <FiBell className={styles.iconCenter} size={150} color='#9999ff' />
                    <h2 className={styles.cardDesc}>Total posts: 150</h2>
                </div>
            </div>
            <div className={styles.lastPosts}>
                <p className={styles.lastPostsTitle}>Last posts</p>
                <div className={styles.posts}>
                    <div className={styles.post}>
                        <div className={styles.postImage}></div>
                        <div className={styles.postTitle}>
                            <p>Titulo do post</p>
                        </div>
                    </div>
                    <div className={styles.post}>
                        <div className={styles.postImage}></div>
                        <div className={styles.postTitle}>
                            <p>Titulo do post</p>
                        </div>
                    </div>
                    <div className={styles.post}>
                        <div className={styles.postImage}></div>
                        <div className={styles.postTitle}>
                            <p>Titulo do post</p>
                        </div>
                    </div>
                    <div className={styles.post}>
                        <div className={styles.postImage}></div>
                        <div className={styles.postTitle}>
                            <p>Titulo do post</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}