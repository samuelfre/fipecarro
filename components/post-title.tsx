import React, { ReactNode } from 'react'
import styles from '../styles/Blog.module.css'

interface IPostTitle {
    children: ReactNode
}

const PostTitle = ({ children }: IPostTitle) => {
    return (
        <h1
            className={styles.postTitle}
            dangerouslySetInnerHTML={{ __html: children as string }}
        />
    )
}

export default PostTitle