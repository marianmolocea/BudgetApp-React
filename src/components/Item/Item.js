import React from 'react'
import './Item.css'

export default function Item({description, value}) {
    return (
        <div className="Item">
            <div className="description">{description}</div>
            <div className="value">${value}</div>
        </div>
    )
}
