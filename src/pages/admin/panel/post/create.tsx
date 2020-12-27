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
                <form>
                    <p className={styles.title}>CREATE POST</p>
                    <textarea placeholder="Post content" value={content} onChange={e => setContent(e.target.value)} className={styles.textarea}>

                    </textarea>
                    <input placeholder="Image link" type="text" className={styles.imageinput}/>
                    <button className={styles.postButton}>POST</button>
                </form>
            </div>
            <div className={styles.previewContainer}>
                <div className={styles.preview}>
                    {parser(content)}
                </div>
            </div>
        </>
    )
}