// src/Pages/OurMenu.jsx
import React, { useState } from 'react';
import { useCart } from '../Context/cartContext'; // ✅ Import useCart
import './OurMenu.css';
import Cart from './Cart';
import { useNavigate } from 'react-router-dom';


const foodItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    category: 'Mains',
    price: 12.99,
    description: 'Classic cheese pizza with fresh basil.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMmLajf4f0mILMr8yJwL7OEQh_OadfUO44A&s',
  },
  {
    id: 2,
    name: 'Caesar Salad',
    category: 'Starters',
    price: 7.99,
    description: 'Crisp romaine with creamy Caesar dressing.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMmLajf4f0mILMr8yJwL7OEQh_OadfUO44A&s',
  },
  // ✅ Continue the rest of your foodItems correctly here (no description mistake)
  {
    id: 3,
    name: 'Chocolate Lava Cake',
    category: 'Desserts',
    price: 6.50,
    description: 'Warm, gooey chocolate cake with molten center.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMmLajf4f0mILMr8yJwL7OEQh_OadfUO44A&s',
  },
  {
    id: 4,
    name: 'Mango Smoothie',
    category: 'Drinks',
    price: 2.99,
    description: 'Refreshing mango smoothie with ice and mint.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMmLajf4f0mILMr8yJwL7OEQh_OadfUO44A&s',
  },
  {
    id: 5,
    name: 'Burger',
    category: 'Fast Food',
    price: 4.99,
    description: 'Delicious juicy beef burger with cheese.',
    image: 'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg',
  },
  {
    id: 6,
    name: 'White Pasta',
    category: 'Fast Food',
    price: 3.99,
    description: 'Creamy white sauce pasta with herbs.',
    image: 'https://www.recipetineats.com/tachyon/2017/03/One-Pot-Chicken-Alfredo-2.jpg',
  },
  {
    id: 7,
    name: 'Hakka Noodles',
    category: 'Fast Food',
    price: 2.99,
    description: 'Spicy and flavorful Chinese-style noodles.',
    image: 'https://www.cookwithmanali.com/wp-content/uploads/2014/11/Hakka-Noodles-1.jpg',
  },
  {
    id: 8,
    name: 'Mojito',
    category: 'Drinks',
    price: 7.99,
    description: 'Refreshing lime and mint cocktail.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMmLajf4f0mILMr8yJwL7OEQh_OadfUO44A&s',
  },
  {
    id: 9,
    name: 'Samosa',
    category: 'Fast Food',
    price: 1.99,
    description: 'Crispy fried pastry with spicy filling.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMmLajf4f0mILMr8yJwL7OEQh_OadfUO44A&s',
  },
  {
    id: 10,
    name: 'Chole Bhature',
    category: 'Fast Food',
    price: 2.99,
    description: 'Fried bread with spicy chickpeas.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMmLajf4f0mILMr8yJwL7OEQh_OadfUO44A&s',
  },
  {
    id: 11,
    name: 'Paneer Tikka',
    category: 'Fast Food',
    price: 3.99,
    description: 'Grilled Indian cottage cheese cubes.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMmLajf4f0mILMr8yJwL7OEQh_OadfUO44A&s',
  },
  {
    id: 12,
    name: 'Afghani Chaap',
    category: 'Fast Food',
    price: 5.99,
    description: 'Creamy marinated soy chaap.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMmLajf4f0mILMr8yJwL7OEQh_OadfUO44A&s',
  },
];

const OurMenu = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // ✅ Get addToCart from CartContex  t
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All'
    ? foodItems
    : foodItems.filter(item => item.category === selectedCategory);

  return (
    <div className="menu-container">
      <h1 className="menu-title">Our Menu</h1>

      {/* Categories Filter (optional) */}
      {/* 
      <div className="menu-categories">
        <button onClick={() => setSelectedCategory('All')}>All</button>
        <button onClick={() => setSelectedCategory('Fast Food')}>Fast Food</button>
        <button onClick={() => setSelectedCategory('Drinks')}>Drinks</button>
        <button onClick={() => setSelectedCategory('Desserts')}>Desserts</button>
        <button onClick={() => setSelectedCategory('Mains')}>Mains</button>
      </div>
      */}

      <div className="menu-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} className="menu-image" />
            <div className="menu-details">
              <h3 className="menu-name">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <div className="menu-footer">
                <span className="menu-price">${item.price}</span>
                <button
                  className="menu-add-btn"
                  onClick={() => {
                    addToCart(item);
                    navigate('/Cart'); // Go to Cart page
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMenu;
