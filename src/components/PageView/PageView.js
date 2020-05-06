import React, { useContext } from 'react';
import { inputContext } from '../../context/InputContext';
import './PageView.css'
import Input from '../Input/Input'
import Item from '../Item/Item';

export default function PageView() {

    let {items, removeItem} = useContext(inputContext);

    
    return (
        <div className="PageView">
            <div className="header">
                <h1>Budget APP</h1>
                <Input />
            </div>
            <div className="container">
                <div className="expenses">
                    <h2>Expenses</h2>
                    {
                        items.length && items.map(item => (
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
                <div className="income">
                    <h2>Income</h2>
                    {
                        items.length && items.map(item => (
                            item.type === 'income' && 
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
            </div>
        </div>
    )
}
