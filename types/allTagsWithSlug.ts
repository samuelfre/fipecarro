export interface AllTagsWithSlug {
    data: Data
  }
  
  export interface Data {
    tags: Tags
  }
  
  export interface Tags {
    edges: Edge[]
  }
  
  export interface Edge {
    node: Node
  }
  
  export interface Node {
    slug: string
  }
  