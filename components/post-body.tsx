import React from 'react'
import styles from '../styles/post-body.module.css'

interface IPostBody {
    content: string
}

const PostBody = ({ content }: IPostBody) => {
    return (
        <div className="max-w-2xl mx-auto" style={{
            maxWidth: '42rem',
            marginLeft: 'auto',
            marginRight: 'auto'            
        }}>
            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    )
}

export default PostBody