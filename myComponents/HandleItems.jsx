import './CSS/HandleItems.css';
import React, { useState } from 'react';

// Header.jsx
const Header = ({ title }) => (
  <header className="header">
    <h1>{title}</h1>
  </header>
);

// Button.jsx
const Button = ({ label, color, onClick }) => (
  <button
    className="button"
    style={{ backgroundColor: color }}
    onClick={onClick}>
    {label}
  </button>
);

// List.jsx
const List = ({ items, onItemClick }) => (
  <ul className="list">
    {items.map((item, index) => (
      <ListItem key={index} item={item} onItemClick={onItemClick} />
    ))}
  </ul>
);

// ListItem.jsx
const ListItem = ({ item, onItemClick }) => (
  <li className="list-item">
    {item}
    <Button label="Edit" color="green" onClick={() => onItemClick(item, false)} />
    <Button label="Delete" color="red" onClick={() => onItemClick(item, true)} />
  </li>
);

//HandleItems.jsx
const HandleItems = () => {
  const [items, setItems] = useState(["Buy milk", "Walk the dog", "Do laundry"]);
  const [newItem, setNewItem] = useState('');
  const [editingItem, setEditingItem] = useState(null);

  const handleItemClick = (item, isDelete) => {
    if (isDelete) {
      setItems(items.filter((i) => i !== item));
    } else {
      setEditingItem(item);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingItem) {
      const editedItem = e.target.editItem.value;
      setItems(items.map((i) => i === editingItem ? editedItem : i));
      setEditingItem(null);
    } else {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div>
      <Header title="My Todo List" />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        {editingItem ? (
          <input
            type="text"
            name="editItem"
            value={editingItem}
            onChange={(e) => setEditingItem(e.target.value)}
            placeholder="Edit item"
          />
        ) : (
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add new item"
          />
        )}
        <button type="submit">{editingItem ? 'Save' : 'Add'}</button>
      </form>
      <br />
      <br />
      <List items={items} onItemClick={handleItemClick} />
      <br />
      <br />
      <br />
    </div>
  );
};
export default HandleItems;