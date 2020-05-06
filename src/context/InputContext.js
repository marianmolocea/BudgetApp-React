import React, { createContext, useState, useEffect } from 'react';

export const inputContext = createContext();

export default function InputContext({children}) {
    let [inputValue, setInputValue] = useState('');
    let [inputName, setInputName] = useState('');
    let [items, setItems] = useState('');
    let [isLoaded, setIsLoaded] = useState(false)

    const addItem = (type) => {
        let newItem = {type, inputName, inputValue};
        if(newItem.inputName && newItem.inputValue > 0) {
            fetch(`http://localhost:3001/api/inputdata`, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newItem)
            });
            setIsLoaded(false)
            setInputValue('');
            setInputName('');
        } else {
            alert("Invalid input values. Please check if you entered valid input values!")
        }
    }

    const removeItem = (id) => {
        fetch(`http://localhost:3001/api/inputdata/${id}`, {
            method: 'DELETE',
        })
        setIsLoaded(false);
    }

    useEffect(() => {
        if(!isLoaded) {
            (async () => {
                const response = await fetch('http://localhost:3001/api/inputdata');
                const userItems = await response.json();
                setItems(userItems.data.items)
                setIsLoaded(true)
            })()
        }
    }, [isLoaded, items])

    return (
        <inputContext.Provider value={{inputValue, setInputValue, inputName, setInputName, addItem, removeItem, items}}>
            {children}
        </inputContext.Provider>
    )
}
