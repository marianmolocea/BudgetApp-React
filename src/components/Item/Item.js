import React from 'react'
import './Item.css'
import {AiOutlineCloseCircle} from 'react-icons/ai'

export default function Item({id, description, value, type, removeItem}) {
    return (
        <div className={`Item ${type}`}>
            <div className="description">{description}</div>
            <div className="value">{type === 'expense' ? '-' : '+'}£{value}</div>
            <button className="close" onClick={() => removeItem(id, type)}><AiOutlineCloseCircle /></button>
        </div>
    )
}
