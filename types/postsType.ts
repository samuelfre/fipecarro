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
  categories: Categories
  tags: Tags
}

export interface FeaturedImage {
  node: Node2
}

export interface Node2 {
  sourceUrl: string
}

export interface Categories {
  edges: Edge2[]
}

export interface Edge2 {
  node: Node3
}

export interface Node3 {
  name: string
}

export interface Tags {
  edges: any[]
}
