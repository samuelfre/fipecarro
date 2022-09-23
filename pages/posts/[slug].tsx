import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../api/apiBlog'
import { Post, Posts } from '../../types/types'

const Post = ({ post, posts }: {
    post: Post,
    posts: Posts
}) => {
    const router = useRouter()
    const morePosts = posts?.edges

    if (!router.isFallback && !post?.slug) {
        // return <ErrorPage statusCode={404} />
        return <div>Error 404</div>
    }
    return (
        <div>Post</div>
    )
}

export default Post

export const getStaticProps: GetStaticProps = async ({
    params,
    preview = false,
    previewData,
}) => {
    const data = await getPostAndMorePosts(params?.slug as string, preview, previewData)

    return {
        props: {
            preview,
            post: data.post,
            posts: data.posts,
        },
        revalidate: 10,
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const allPosts = await getAllPostsWithSlug()

    return {
        paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
        fallback: true,
    }
}