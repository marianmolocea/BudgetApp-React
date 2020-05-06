import React from 'react';
import './PageView.css'
import Input from '../Input/Input'
import Expenses from '../Expenses/Expenses'
import Incomes from '../Incomes/Incomes';
import TotalBudget from '../TotalBudget/TotalBudget'

export default function PageView() {   
    return (
        <div className="PageView">
            <div className="header">
                <h1>Budget APP</h1>
                <TotalBudget />
                <Input />
            </div>
            <div className="container">
                <Expenses />
                <Incomes />
            </div>
        </div>
    )
}
