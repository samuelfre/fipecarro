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

export interface FeaturedImage {
  node: Node
}

export interface Node {
  sourceUrl: string
}

export interface Categories {
  edges: Edge[]
}

export interface Edge {
  node: Node2
}

export interface Node2 {
  name: string
}

export interface Tags {
  edges: Edge2[]
}

export interface Edge2 {
  node: Node3
}

export interface Node3 {
  name: string,
  slug: string
}
