import React, { useContext } from 'react'
import { inputContext } from '../../context/InputContext'

export default function Input() {

    let {inputDescription, setInputDescription, inputValue, setInputValue, addExpenses, addIncome} = useContext(inputContext);

    return (
        <div className="Input">
            <input type="text" value={inputDescription} placeholder="Enter the description..." onChange={e => setInputDescription(e.target.value)}/>
            <input type="number" value={inputValue} placeholder="Enter the value..." onChange={e => setInputValue(e.target.value)}/>
            <div className="btn-container">
                <button className="income-btn" onClick={() => addExpenses()}>Add Expense</button>
                <button className="income-btn" onClick={() => addIncome()}>Add Income</button>
            </div>
        </div>
    )
}
