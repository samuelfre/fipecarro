import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { getAllPostsForTag, getAllTagsWithSlug } from '../api/apiBlog'
import { Posts } from '../../types/postsType'
import HeroPost from '../../components/hero-post'
import { ParsedUrlQuery } from 'querystring'


const Tag = ({ posts, title }: { posts: Posts, title: string }) => {

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <h1>{'Tag: ' + title}</h1>
            {
                posts.edges.map((value, index) => <HeroPost key={index} edges={value}></HeroPost>)
            }
        </div>
    )
}

export default Tag

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const data = await getAllPostsForTag(params?.slug as string)
    return {
        props: {
            posts: data,
            title: params?.slug as string
        },
        revalidate: 10,
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const allTags = await getAllTagsWithSlug()

    return {
        paths: allTags.edges.map(({ node }) => `/tags/${node.slug}`) || [''],
        fallback: true,
    }
}