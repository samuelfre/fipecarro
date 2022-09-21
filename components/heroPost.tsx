import Link from 'next/link'
import React from 'react'
import { Edge } from '../types/types'
import Date from './date'
import styles from '../styles/Blog.module.css'
import CoverImage from './cover-image'

interface IHeroPost {
    edges: Edge
}
const HeroPost = (props: IHeroPost) => {
    return (
        <section>
            <div className={styles.wrapperImage}>
                {props.edges.node.featuredImage && (
                    <CoverImage title={props.edges.node.title} coverImage={props.edges.node.featuredImage} slug={props.edges.node.slug} />
                )}
            </div>
            <div className={styles.grid}>
                <div>
                    <h3>
                        <Link href={`/posts/${props.edges.node.slug}`}>
                            <a
                                dangerouslySetInnerHTML={{ __html: props.edges.node.title }}
                            />
                        </Link>
                    </h3>
                    {/* "mb-4 md:mb-0 text-lg" */}
                    <div>
                        <Date dateString={props.edges.node.date} />
                    </div>
                </div>
                <div
                    className={styles.excerpt}
                    dangerouslySetInnerHTML={{ __html: props.edges.node.excerpt }}
                />
            </div>
        </section>
    )
}

export default HeroPost