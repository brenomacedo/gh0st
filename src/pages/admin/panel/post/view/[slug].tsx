import styles from '../../../../../styles/viewpost.module.css'
import { FiEdit } from 'react-icons/fi'
import { GetServerSideProps } from 'next'

export default function ViewPost(props) {
    return (
        <div className={styles.container}>
            <FiEdit className={styles.edit} size={30} color='white' />
            <div className={styles.postpreview}>
                <h2>{props.slug}</h2>
            </div> 
            <footer className={styles.footer}>
                gh0st - All rights reserved - 2021
            </footer>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
    return {
        props: {
            slug: ctx.params.slug
        }
    }
}