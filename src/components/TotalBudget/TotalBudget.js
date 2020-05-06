import React, {useContext} from 'react';
import {inputContext} from '../../context/InputContext'

export default function TotalBudget() {
    let {items} = useContext(inputContext);

    const calculateBudget = (items) => (
        items.reduce((total, item) => {
            return item.type === "expense" ?
                total - item.inputValue : total + item.inputValue
        }, 0)
    );

    const formattedBudget = () => Math.round(calculateBudget(items) * 100) / 100;
    
    return (
        <div className="TotalBudget">
            £{!items.length ? '00.00' : formattedBudget()}
        </div>
    )
}
