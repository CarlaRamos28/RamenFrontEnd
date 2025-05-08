import React, { useState } from 'react';

const MENU_ITEMS = [
  {
    id: 1,
    name: 'Tonkotsu Ramen',
    price: 210,
    image: 'https://source.unsplash.com/featured/?ramen',
    category: 'Ramen',
  },
  {
    id: 2,
    name: 'tantanmen Ramen',
    price: 210,
    image: 'https://source.unsplash.com/featured/?tantanmen',
    category: 'Ramen',
  },
  {
    id: 3,
    name: 'karaage Ramen',
    price: 200,
    image: 'https://source.unsplash.com/featured/?noodles',
    category: 'Ramen',
  },
  {
    id: 4,
    name: 'chicken karaage',
    price: 160,
    image: 'https://source.unsplash.com/featured/?karaage',
    category: 'Side Dishes',
  },
  {
    id: 5,
    name: 'chashu don',
    price: 150,
    image: 'https://source.unsplash.com/featured/?chashu',
    category: 'Rice Bowls',
  },
  {
    id: 6,
    name: 'Katsu Curry',
    price: 180,
    image: 'https://source.unsplash.com/featured/?katsu',
    category: 'Rice Bowls',
  },
  {
    id: 7,
    name: 'california roll sushi',
    price: 170,
    image: 'https://source.unsplash.com/featured/?sushi',
    category: 'Side Dishes',
  },
  {
    id: 8,
    name: 'Gyoza',
    price: 80,
    image: 'https://source.unsplash.com/featured/?gyoza',
    category: 'Side Dishes',
  },
  {
    id: 9,
    name: 'Tempura',
    price: 150,
    image: 'https://source.unsplash.com/featured/?tempura',
    category: 'Side Dishes',
  },
];

const CATEGORIES = ['All', 'Ramen', 'Rice Bowls', 'Side Dishes', 'Drinks', 'Add-ons'];

function POS() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('Gcash');
  const [orderType, setOrderType] = useState('Dine-In');

  const filteredItems = selectedCategory === 'All'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === selectedCategory);

  const addToCart = (item) => {
    setCart(prev => {
      const found = prev.find(ci => ci.id === item.id);
      if (found) {
        return prev.map(ci => ci.id === item.id ? { ...ci, qty: ci.qty + 1 } : ci);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(ci => ci.id !== id));
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(ci =>
      ci.id === id ? { ...ci, qty: Math.max(1, ci.qty + delta) } : ci
    ));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="flex flex-row h-[calc(100vh-64px)] bg-gray-50">
      {/* Left: Menu */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered w-full max-w-xs mr-4"
          />
        </div>
        <div className="mb-4 flex gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`btn btn-sm ${selectedCategory === cat ? 'btn-error text-white' : 'btn-ghost'}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredItems.map(item => (
            <div key={item.id} className="card bg-white shadow-md">
              <figure className="h-32 overflow-hidden"><img src={item.image} alt={item.name} className="object-cover w-full h-full" /></figure>
              <div className="card-body p-4">
                <h2 className="card-title text-base font-semibold">{item.name}</h2>
                <p className="text-error font-bold">PHP {item.price.toFixed(2)}</p>
                <button className="btn btn-error btn-sm mt-2" onClick={() => addToCart(item)}>Add</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Right: Cart */}
      <div className="w-full md:w-[350px] bg-white border-l p-6 flex flex-col justify-between min-h-[calc(100vh-64px)]">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Cart</h2>
            <span className="text-gray-400">#0001</span>
          </div>
          <div className="space-y-4 mb-6">
            {cart.length === 0 && <div className="text-gray-400">Cart is empty</div>}
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between bg-gray-50 rounded p-2">
                <div className="flex items-center gap-2">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-error text-sm">PHP {item.price.toFixed(2)}</div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <button className="text-error text-lg" onClick={() => removeFromCart(item.id)}>&#128465;</button>
                  <div className="flex items-center mt-2">
                    <button className="btn btn-xs btn-ghost" onClick={() => updateQty(item.id, -1)}>-</button>
                    <span className="mx-2">{item.qty}</span>
                    <button className="btn btn-xs btn-ghost" onClick={() => updateQty(item.id, 1)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">Select Payment Method</span>
              <span className="font-semibold cursor-pointer" onClick={() => setPaymentMethod(paymentMethod === 'Gcash' ? 'Cash' : 'Gcash')}>{paymentMethod}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Order Type</span>
              <span className="font-semibold cursor-pointer" onClick={() => setOrderType(orderType === 'Dine-In' ? 'Takeout' : 'Dine-In')}>{orderType}</span>
            </div>
            <div className="flex justify-between text-lg font-bold mt-2">
              <span>Total</span>
              <span className="text-error">PHP {total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <button className="btn btn-error btn-lg w-full mt-6" disabled={cart.length === 0}>CHECKOUT</button>
      </div>
    </div>
  );
}

export default POS;