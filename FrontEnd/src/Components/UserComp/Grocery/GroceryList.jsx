import React, { useState } from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import './GroceryList.css';

const GroceryList = () => {
  const [groceryItems, setGroceryItems] = useState([
    { id: 1, name: 'Tomatoes', quantity: 2, unit: 'kg' },
    { id: 2, name: 'Onion', quantity: 300, unit: 'g' },
    { id: 3, name: 'Corn', quantity: 1, unit: 'kg' },
    { id: 4, name: 'Broccoli', quantity: 500, unit: 'g' },
  ]);

  const handleAddProduct = () => {
    const newItem = { id: Date.now(), name: '', quantity: 1, unit: 'kg' };
    setGroceryItems([newItem, ...groceryItems]);
  };

  const handleCleanList = () => setGroceryItems([]);

  const handleDeleteItem = (id) => setGroceryItems(groceryItems.filter(item => item.id !== id));

  const updateQuantity = (id, delta) => {
    setGroceryItems(groceryItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const updateName = (id, newName) => {
    setGroceryItems(groceryItems.map(item => item.id === id ? { ...item, name: newName } : item));
  };

  const updateUnit = (id, newUnit) => {
    setGroceryItems(groceryItems.map(item => item.id === id ? { ...item, unit: newUnit } : item));
  };

  return (
    <div className="grocery-container">
      <div className="grocery-header">
        <h1 className="grocery-title">Grocery list</h1>
        <div className="grocery-actions">
          <button className="grocery-btn-outline" onClick={handleAddProduct}>
            Add more products +
          </button>
          <button className="grocery-btn-outline" onClick={handleCleanList}>
            Clean My Grocery List
          </button>
        </div>
      </div>

      <div className="grocery-grid">
        {groceryItems.length === 0 ? (
          <div className="grocery-empty">Your grocery list is empty.</div>
        ) : (
          groceryItems.map((item) => (
            <div key={item.id} className="grocery-item-card">
              <div className="grocery-item-left">
                <input 
                  type="text" 
                  value={item.name} 
                  onChange={(e) => updateName(item.id, e.target.value)}
                  placeholder="Item name..."
                  className="grocery-name-input"
                />
              </div>

              <div className="grocery-item-right">
                <button className="grocery-qty-btn" onClick={() => updateQuantity(item.id, -1)}>
                  <Minus size={14} />
                </button>
                <span className="grocery-qty-text">{item.quantity}</span>
                <button className="grocery-qty-btn" onClick={() => updateQuantity(item.id, 1)}>
                  <Plus size={14} />
                </button>

                <select 
                  value={item.unit} 
                  onChange={(e) => updateUnit(item.id, e.target.value)}
                  className="grocery-unit-select"
                >
                  <option value="kg">kg</option>
                  <option value="g">g</option>
                  <option value="pcs">pcs</option>
                  <option value="lbs">lbs</option>
                </select>

                <button className="grocery-delete-btn" onClick={() => handleDeleteItem(item.id)}>
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GroceryList;