import React, { useContext } from 'react';
import { inputContext } from '../../context/InputContext';
import './PageView.css'
import Input from '../Input/Input'
import Item from '../Item/Item';

export default function PageView() {

    let {items: {exp, inc}} = useContext(inputContext)

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
                        exp.map((item, index) => <Item key={item.description + index} description={item.description} value={item.value} />)
                    }
                </div>
                <div className="income">
                    <h2>Income</h2>
                    {
                        inc.map((item, index) => <Item key={item.description + index} description={item.description} value={item.value} />)
                    }
                </div>
            </div>
        </div>
    )
}
