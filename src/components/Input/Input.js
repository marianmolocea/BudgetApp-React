import React, { useContext } from 'react'
import { inputContext } from '../../context/InputContext'

export default function Input() {

    let {inputName, setInputName, inputValue, setInputValue, addItem} = useContext(inputContext);

    return (
        <div className="Input">
            <input type="text" value={inputName} placeholder="Enter the description..." onChange={e => setInputName(e.target.value)}/>
            <input type="number" value={inputValue} placeholder="Enter the value..." onChange={e => setInputValue(e.target.value)}/>
            <div className="btn-container">
                <button className="income-btn" onClick={() => addItem('expense')}>Add Expense</button>
                <button className="income-btn" onClick={() => addItem('income')}>Add Income</button>
            </div>
        </div>
    )
}
