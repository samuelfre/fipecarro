import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { Posts } from '../types/types'
import { getAllPostsForHome, getPostAndMorePosts } from './api/apiBlog'
import styles from '../styles/Blog.module.css'
import Head from 'next/head'
import HeroPost from '../components/heroPost'

const blog: NextPage<{
  allPosts: Posts
}> = ({ allPosts: { edges } }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta name="description" content='Blog Tabela Fip' />
        <meta name="keywords" content="tabela fipe, tabela fipe 2022, fipe carros, fipe veiculos, tabela fipe carros, tabela fipe motos, tabela fipe moto, tabela fipe veiculos"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.blog}>Blog Fipe Carro</div>

      {
        edges.map((value, index) => <HeroPost key={index} edges={value}></HeroPost>)
      }

    </div>
  )
}

export default blog

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getAllPostsForHome()
  
  return {
    props: { allPosts },
    revalidate: 10,
  }
}