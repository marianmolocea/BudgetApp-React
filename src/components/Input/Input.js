import React, { useContext } from 'react'
import { inputContext } from '../../context/InputContext'
import './Input.css'
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai'

export default function Input() {

    let {inputName, setInputName, inputValue, setInputValue, addItem} = useContext(inputContext);

    return (
        <div className="Input">
            <input 
                className="description"
                type="text" 
                value={inputName} 
                placeholder="Description..." 
                onChange={e => setInputName(e.target.value)}
            />
            <input 
                className="value"
                type="number" 
                value={inputValue} 
                placeholder="Value..." 
                onChange={e => setInputValue(e.target.value)}
            />
            <div className="btn-container">
                <button 
                    className="income-btn" 
                    onClick={() => addItem('income')}
                >
                    <span>Add Income</span><AiOutlinePlusCircle />
                </button>
                <button 
                    className="expense-btn" 
                    onClick={() => addItem('expense')}
                >
                   <span>Add Expense</span><AiOutlineMinusCircle />
                </button>
            </div>
        </div>
    )
}
