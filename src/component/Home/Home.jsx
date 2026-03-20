import React from 'react';
import './Home.css';

const Home = () => {
    // খাবারের সেকশনে স্ক্রল করার ফাংশন
    const scrollToMenu = () => {
        const foodSection = document.querySelector('.food-container-parent');
        if (foodSection) {
            foodSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="home-container">
            <div className="home-content">
                <h1 className="hero-title">
                    The Ultimate Destination for Taste & Tradition - <span className="brand-name">Foodie FI</span>
                </h1>
                <p className="hero-subtitle">
                    Discover a wide variety of your favorite delicious meals right at your fingertips. 
                    We believe good food leads to a happy heart. Experience the best quality and 
                    fresh ingredients prepared just for you.
                </p>
                <div className="home-buttons">
                    <button className="primary-btn">Order Now</button>
                    {/* এই বাটনে ক্লিক করলে স্ক্রল হবে */}
                    <button onClick={scrollToMenu} className="secondary-btn">View Menu</button>
                </div>
            </div>
            <div className="home-image">
                <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop" alt="Delicious Food" />
            </div>
        </div>
    );
};

export default Home;