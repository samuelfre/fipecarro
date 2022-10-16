import React from 'react'
import { FeaturedImage } from '../types/types'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import styles from '../styles/Blog.module.css'
import Date from '../components/date'
import Categoriess from './categories'
import { Categories } from '../types/postTypes'

interface IPostHeader {
    title: string,
    coverImage: FeaturedImage,
    date: string,
    categories: Categories
}

const PostHeader = ({
    title,
    coverImage,
    date,
    categories,
}: IPostHeader) => {
    return (
        <>
            <PostTitle>{title}</PostTitle>
            <div className={styles.myDiv}>
                <CoverImage title={title} coverImage={coverImage} />
            </div>
            <div style={{
                maxWidth: '42rem',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}>
                <div className="mb-6 text-lg" style={{
                    marginBottom: '1.5rem',
                    fontSize: '1.125rem',
                    lineHeight: '1.75rem'
                }}>
                    Postado em <Date dateString={date} />
                    <Categoriess categories={categories} />
                </div>
            </div>
        </>
    )
}

export default PostHeader