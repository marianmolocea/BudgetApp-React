import React, { createContext, useState, useEffect } from 'react';
import { v4 as uniqId } from 'uuid';

export const inputContext = createContext();

export default function InputContext({children}) {
    let [inputValue, setInputValue] = useState('');
    let [inputDescription, setInputDescription] = useState('');
    let [items, setItems] = useState('');
    let [isLoaded, setIsLoaded] = useState(false)

    let newItem = {id: uniqId(), description: inputDescription, value: inputValue};

    const valuesExists = () => newItem.description && newItem.value ? true : false;

    const addItem = (type) => {
        if(valuesExists()) {
            fetch(`http://localhost:3001/api/inputdata/${type}`, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newItem)
            });
            setIsLoaded(false)
            setInputValue('');
            setInputDescription('');
        }
    }

    const removeItem = (id, type) => {
        items[type].splice(items[type].findIndex(item => item.id === id), 1);
        setItems({exp: items.exp, inc: items.inc});
        localStorage.items = items;
    }

    useEffect(() => {
        if(!isLoaded) {
            (async () => {
                const response = await fetch('http://localhost:3001/api/inputdata');
                const inputData = await response.json();
                setItems(inputData)
                setIsLoaded(true)
            })()
        }
    }, [isLoaded, items])

    return (
        <inputContext.Provider value={{inputValue, setInputValue, inputDescription, setInputDescription, addItem, removeItem, items}}>
            {children}
        </inputContext.Provider>
    )
}
