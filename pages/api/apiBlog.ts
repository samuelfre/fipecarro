import { AllPostForHome } from "../../types/types"

const API_URL = process.env.WORDPRESS_API_URL as unknown


async function fetchAPI<T>(query = '') {
    const headers = { 'Content-Type': 'application/json' }

    // WPGraphQL Plugin must be enabled
    const res = await fetch(API_URL as URL, {
        headers,
        method: 'POST',
        body: JSON.stringify({
            query,
        }),
    })

    const json = await res.json() 
    
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json as T
}

export async function getAllPostsForHome() {
    const { data }  = await fetchAPI<AllPostForHome>(
        `
        query AllPosts {
            posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
              edges {
                node {
                  title
                  excerpt
                  slug
                  date
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
    `
    )
    
    return data?.posts
}