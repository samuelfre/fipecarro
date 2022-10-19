import React from 'react'
import { Categories } from '../types/postTypes'


interface ICategories {
    categories: Categories
}

const Categoriess = ({categories} : ICategories) => {
    return (
        <span style={{
            fontWeight: 'bold',
            marginLeft: '0.555rem'
        }}>
            {categories.edges.length > 0 ? (
                categories.edges.map((category, index) => (
                    <span key={index} style={{
                        marginLeft: '0.25rem'
                    }}>
                        {(category.node.name === 'Uncategorized') ? '' : category.node.name}
                    </span>
                ))
            ) : (
                <span style={{
                    marginLeft: '0.25rem'
                }}>{categories.edges[0].node.name}</span>
            )}
        </span>
    )
}

export default Categoriess