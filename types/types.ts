import { Categories } from '../types/postTypes'

export interface AllPostForHome {
  data: Data
}

export interface Data {
  posts: Posts
}

export interface Posts {
  edges: Edge[]
}

export interface Edge {
  node: Node
}

export interface Node {
  title: string
  excerpt: string
  slug: string
  date: string
  featuredImage: FeaturedImage
}

export interface FeaturedImage {
  node: Node2
}

export interface Node2 {
  sourceUrl: string
}
//-------------------------**********

export interface AllPostsWithSlug {
  data: Data
}

export interface Data {
  posts: Posts
}

export interface Posts {
  edges: Edge[]
}

export interface Edge {
  node: Node
}

export interface Node {
  slug: string
}
//-------------------------**********

export interface PostAndMorePosts {
  data: Data
}

export interface Data {
  post: Post
  posts: Posts
}

export interface Post {
  title: string
  excerpt: string
  slug: string
  date: string
  featuredImage: FeaturedImage
  categories: Categories
  tags: Tags
  content: string
}

export interface FeaturedImage {}

export interface Root {
  data: Data
  extensions: Extensions
}

export interface Data {
  categories: Categories
}

export interface Extensions {
  debug: Debug[]
}

export interface Debug {
  type: string
  message: string
}


export interface Tags {}

export interface Posts {
  edges: Edge[]
}
