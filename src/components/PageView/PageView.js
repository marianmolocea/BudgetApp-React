import React, { useContext } from 'react';
import { inputContext } from '../../context/InputContext';
import './PageView.css'
import Input from '../Input/Input'
import Item from '../Item/Item';

export default function PageView() {

    let {items: {expenses, incomes}, removeItem} = useContext(inputContext);

    
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
                        expenses && expenses.map(item => <Item key={item.id} id={item.id} description={item.description} value={item.value} type="exp" removeItem={removeItem}/>)
                    }
                </div>
                <div className="income">
                    <h2>Income</h2>
                    {
                        incomes && incomes.map(item => <Item key={item.id} id={item.id} description={item.description} value={item.value} type="inc" removeItem={removeItem}/>)
                    }
                </div>
            </div>
        </div>
    )
}
