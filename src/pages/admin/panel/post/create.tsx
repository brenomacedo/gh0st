import SideBar from '../../../../components/SideBar'
import styles from '../../../../styles/create.module.css'
import parser from 'html-react-parser'
import { useState } from 'react'


export default function Create() {

    const [content, setContent] = useState('')

    return (
        <>
            <SideBar />
            <div className={styles.container}>
                <p className={styles.title}>CREATE POST</p>
                <textarea value={content} onChange={e => setContent(e.target.value)} className={styles.textarea}>

                </textarea>
                <button className={styles.postButton}>POST</button>
            </div>
            <div className={styles.previewContainer}>
                <div className={styles.preview}>
                    {parser(content)}
                </div>
            </div>
        </>
    )
}