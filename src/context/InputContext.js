import React, { createContext, useState } from 'react';
import { v4 as uniqId } from 'uuid';

export const inputContext = createContext();

export default function InputContext({children}) {
    let [inputValue, setInputValue] = useState('');
    let [inputDescription, setInputDescription] = useState('');
    let [items, setItems] = useState({exp: [], inc: []})

    let newItem = {id: uniqId(), description: inputDescription, value: inputValue};

    const valuesExists = () => newItem.description && newItem.value ? true : false;

    const addExpenses = () => {
        if(valuesExists()) {
            setItems({exp: [...items.exp, newItem], inc: items.inc});
            setInputValue('');
            setInputDescription('');
        }
    }
    const addIncome = () => {
        if(valuesExists()) {
            setItems({exp: items.exp, inc: [...items.inc, newItem]});
            setInputValue('');
            setInputDescription('');
        }
    }

    return (
        <inputContext.Provider value={{inputValue, setInputValue, inputDescription, setInputDescription, addExpenses, addIncome, items}}>
            {children}
        </inputContext.Provider>
    )
}
