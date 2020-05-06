import React, { useContext } from 'react';
import { inputContext } from '../../context/InputContext';
import Item from '../Item/Item';

export default function Incomes() {
  let { items, removeItem } = useContext(inputContext);

  return (
    <div className="Incomes">
      <h2>Income</h2>
      {items.length !== 0 &&
        items.map(
          (item) =>
            item.type === 'income' && (
              <Item
                key={item._id}
                id={item._id}
                description={item.inputName}
                value={item.inputValue}
                type={item.type}
                removeItem={removeItem}
              />
            )
        )}
    </div>
  );
}
