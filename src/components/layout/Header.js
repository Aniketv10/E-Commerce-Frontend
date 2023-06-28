import React, { Fragment } from "react";
import '../../App.css'


const Header = () => {
    return (
        <div>
            <Fragment>
            <section id="header">
                <a href="#">
                <img src="/img/logo2 (1).png" className="logo" alt=""/></a>
                <div >
                    <ul id="navbar">
                        <li><a href="home.html" className="active">Home</a></li>
                        <li><a href="shop.html">Shop</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="contact-us.html">Contact Us</a></li>
                        <li id="lg-bag"><a href="cart.html"><i className="fa-solid fa-bag-shopping"></i></a></li>
                        <a href="#" id="close"><i className="fa fa-times" aria-hidden="true"></i></a>
                    </ul>
                </div>
                <div id="mobile">
                    <a href="cart.html"><i className="fa-solid fa-bag-shopping"></i></a>
                    <i id="bar" className="fas fa-outdent"></i>
                </div>
            </section>
            </Fragment>
        </div>
    )
}

export default Header;