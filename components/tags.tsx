import React from 'react'
import { Tags } from '../types/postTypes'

interface ITags {
    tags: Tags
}

const Tags = ({ tags }: ITags) => {
    return (
        <div style={{
            maxWidth: '42rem',
            marginLeft: 'auto',
            marginRight: 'auto'
        }}>
            <p style={{
                marginTop: '2rem',
                fontSize: '1.125rem',
                lineHeight: '1.75rem',
                fontWeight: 'bold'                                
            }}>
                Tags
                {tags.edges.map((tag, index) => (
                    <span key={index} className="ml-4 font-normal" style={{
                        marginLeft: '1rem',
                        fontWeight: 'normal'
                    }}>
                        {tag.node.name}
                    </span>
                ))}
            </p>
        </div>
    )
}

export default Tags