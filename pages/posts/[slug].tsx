import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../api/apiBlog'
import Head from 'next/head'
import { Post } from '../../types/postTypes'
import { Posts } from '../../types/postsType'
import PostHeader from '../../components/post-header'
import PostBody from '../../components/post-body'
import Tags from '../../components/tags'

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
        <>
            <article style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }} >
                <Head>
                    <title>
                        {post.title}
                    </title>
                    <meta
                        property="og:image"
                        content={post.featuredImage?.node.sourceUrl}
                    />
                </Head>
                <PostHeader
                    title={post.title}
                    coverImage={post.featuredImage}
                    date={post.date}
                    categories={post.categories}
                />
                <PostBody content={post.content} />
                <footer>
                    {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
                </footer>
            </article>

            {/* <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        </>
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