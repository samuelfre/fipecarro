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
  date: string
  featuredImage: FeaturedImage
  slug: string
}

export interface FeaturedImage {
  node: Node2
}

export interface Node2 {
  sourceUrl: string
}
//-------------------------**********