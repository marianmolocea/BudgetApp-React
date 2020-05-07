import React from 'react'
import './Item.css'

export default function Item({id, description, value, type, removeItem}) {
    return (
        <div className={`Item ${type}`}>
            <div className="description">{description}</div>
            <div className="value">{type === 'expense' ? '-' : '+'}£{value}</div>
            <button onClick={() => removeItem(id, type)}>X</button>
        </div>
    )
}
