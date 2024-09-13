import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../images/restauranfood.jpg"
const Header =()=>{
    return (
        <div>
            <header className="header">
            <section>
                {/* banner texts*/ }
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterraneran restuarant, focused on traditional recipes served with a mordern twist.</p>
                    <Link to="/booking"><button aria-label="On Click">Reserve Table</button></Link>
                </div>
                {/* banner images*/ }
                <div className="banner-img">
                    <img src={bannerImg} alt="bannerImg"/>
                </div>
            </section>
            </header>
        </div>
    );
};

export default Header;