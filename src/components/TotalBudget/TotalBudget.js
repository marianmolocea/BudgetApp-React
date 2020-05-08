import React, {useContext} from 'react';
import {inputContext} from '../../context/InputContext'
import './TotalBudget.css'

export default function TotalBudget() {
    let {items} = useContext(inputContext);

    const totalBudget = (items) => (
        items.reduce((total, item) => {
            return item.type === "expense" ?
                total - item.inputValue : total + item.inputValue
        }, 0)
    );

    const totalIncomes = (items) => (
        items.filter(item => item.type === 'income').reduce((total, item) => total + item.inputValue, 0)
    );

    const totalExpenses = (items) => (
        items.filter(item => item.type === 'expense').reduce((total, item) => total + item.inputValue, 0)
    );

    const formattedBudget = (value) => Math.round(value * 100) / 100;
    let total = items.length ? formattedBudget(totalBudget(items)) : '0.00';
    let incomes = items.length ? formattedBudget(totalIncomes(items)) : '0.00';
    let expenses = items.length ? formattedBudget(totalExpenses(items)) : '0.00';
    
    return (
        <div className="TotalBudget">
            <div className={`total ${total < 0 ? 'negative' : 'positive'}`}>
                {
                    total < 0 ? 
                        `Total: -£${total * -1}` : 
                        `Total: £${total}`
                }
            </div>
            <div className="container">
                <div className="totals incomes">Total incomes: £{incomes}</div>
                <div className="totals expenses">Total expenses: {total < 0 && '-'}£{expenses}</div>
            </div>
            
        </div>
    )
}
