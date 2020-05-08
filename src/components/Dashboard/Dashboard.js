import React from 'react';
import './Dashboard.css'
import Input from '../Input/Input'
import Expenses from '../Expenses/Expenses'
import Incomes from '../Incomes/Incomes';
import TotalBudget from '../TotalBudget/TotalBudget'

export default function Dashboard() {   
    return (
        <div className="Dashboard">
            <div className="header">
                <TotalBudget />
                <Input />
            </div>
            <div className="container">
                <Incomes />
                <Expenses />
            </div>
        </div>
    )
}
