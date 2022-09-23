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

export interface Categories {}

export interface Tags {}

export interface Posts {
  edges: Edge[]
}
