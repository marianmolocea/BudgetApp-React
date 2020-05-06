import React, {useContext} from 'react';
import { inputContext } from '../../context/InputContext';
import Item from '../Item/Item';


export default function Expenses() {
    let {items, removeItem} = useContext(inputContext);
    return (
        <div className="Expenses">
        <h2>Expenses</h2>
        {
            items.length !== 0 && items.map(item => (
                item.type === 'expense' && 
                <Item 
                    key={item._id} 
                    id={item._id} 
                    description={item.inputName} 
                    value={item.inputValue} 
                    type={item.type} 
                    removeItem={removeItem}
                />
            ))
        }
    </div>
    )
}
