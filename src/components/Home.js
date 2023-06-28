import React, { Fragment } from 'react';
import "../App.css"
import MetaData from './layout/MetaData';

const Home = () => {
  return (
    <Fragment>
        <MetaData title={'Buy Best Product Online'}/>
        <section id="hero">
            <h4>Trade-In-Offer</h4>
            <h2>Super Value Deals</h2>
            <h1>On All Products</h1>
            <p>Save More With Coupons & up to 70% off</p>
            <button>Shop Now</button>
        </section>
        <section id="feature" className="section-p1">
            <div className="fe-box">
                <img src="../img/features/f1.png" alt=""/>
                <h6>Free Shipping</h6>
            </div>
            <div className="fe-box">
                <img src="../img/features/f2.png" alt=""/>
                <h6>Online Order</h6>
            </div>
            <div className="fe-box">
                <img src="../img/features/f3.png" alt=""/>
                <h6>Save Money</h6>
            </div>
            <div className="fe-box">
                <img src="../img/features/f4.png" alt=""/>
                <h6>Promotions</h6>
            </div>
            <div className="fe-box">
                <img src="../img/features/f5.png" alt=""/>
                <h6>Happy Sell</h6>
            </div> 
            <div className="fe-box">
                <img src="../img/features/f6.png" alt=""/>
                <h6>24/7 Support</h6>
            </div> 
        </section>
        <section id="product1" className="section-p1">
            <h2>Featured Products</h2>
            <p>Summer Collection New Modern Design</p>
            <div className="pro-container">
                <div className="pro" onClick="window.location.href='shopproduct.html';">
                    <img src="../img/products/f1.jpg" alt=""/>
                    <div className="des">
                        <span>US POLO</span>
                        <h5>Animation Astronaut T-Shirts</h5>
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <h4><i className="fa-solid fa-indian-rupee-sign"></i>799</h4>
                    </div>
                    <a href="#"  >
                        <i className="fa-solid fa-cart-shopping" ></i>
                    </a>
                </div>
                <div className="pro">
                    <img src="../img/products/f2.jpg" alt=""/>
                    <div className="des">
                        <span>US POLO</span>
                        <h5>Animation Astronaut T-Shirts</h5>
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <h4><i className="fa-solid fa-indian-rupee-sign"></i>899</h4>
                    </div>
                    <a href="#"  >
                        <i className="fa-solid fa-cart-shopping" ></i>
                    </a>
                </div>
                <div className="pro">
                    <img src="../img/products/f3.jpg" alt=""/>
                    <div className="des">
                        <span>US POLO</span>
                        <h5>Animation Astronaut T-Shirts</h5>
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <h4><i className="fa-solid fa-indian-rupee-sign"></i>699</h4>
                    </div>
                    <a href="#"  >
                        <i className="fa-solid fa-cart-shopping" ></i>
                    </a>
                </div>
                <div className="pro">
                    <img src="../img/products/f4.jpg" alt=""/>
                    <div className="des">
                        <span>US POLO</span>
                        <h5>Animation Astronaut T-Shirts</h5>
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <h4><i className="fa-solid fa-indian-rupee-sign"></i>649</h4>
                    </div>
                    <a href="#"  >
                        <i className="fa-solid fa-cart-shopping" ></i>
                    </a>
                </div>
                <div className="pro">
                    <img src="../img/products/f5.jpg" alt=""/>
                    <div className="des">
                        <span>US POLO</span>
                        <h5>Animation Astronaut T-Shirts</h5>
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <h4><i className="fa-solid fa-indian-rupee-sign"></i>749</h4>
                    </div>
                    <a href="#"  >
                        <i className="fa-solid fa-cart-shopping" ></i>
                    </a>
                </div>
                <div className="pro">
                    <img src="../img/products/f6.jpg" alt=""/>
                    <div className="des">
                        <span>US POLO</span>
                        <h5>Animation Astronaut T-Shirts</h5>
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <h4><i className="fa-solid fa-indian-rupee-sign"></i>999</h4>
                    </div>
                    <a href="#"  >
                        <i className="fa-solid fa-cart-shopping" ></i>
                    </a>
                </div>
                <div className="pro">
                    <img src="../img/products/f7.jpg" alt=""/>
                    <div className="des">
                        <span>US POLO</span>
                        <h5>Animation Astronaut T-Shirts</h5>
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <h4><i className="fa-solid fa-indian-rupee-sign"></i>599</h4>
                    </div>
                    <a href="#"  >
                        <i className="fa-solid fa-cart-shopping" ></i>
                    </a>
                </div>
                <div className="pro">
                    <img src="../img/products/f8.jpg" alt=""/>
                    <div className="des">
                        <span>US POLO</span>
                        <h5>Animation Astronaut T-Shirts</h5>
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <h4><i className="fa-solid fa-indian-rupee-sign"></i>849</h4>
                    </div>
                    <a href="#"  >
                        <i className="fa-solid fa-cart-shopping" ></i>
                    </a>
                </div>
                
            </div>
        </section>
        <section id="banner" className="section-m1">
            <h4>Repair Services</h4>
            <h2>Up to <span>70% Off</span> - All T-Shirts & Accessories</h2>
            <button className="normal">Explore More</button>
        </section>
        <section id="product1" className="section-p1">
            <h2>New Arrivals</h2>
            <p>Summer Collection New Modern Design</p>
            <div className="pro-container">
                <div className="pro">
                    <img src="../img/products/n1.jpg" alt=""/>
                    <div className="des">
                        <span>US POLO</span>
                        <h5>Animation Astronaut T-Shirts</h5>
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <h4><i className="fa-solid fa-indian-rupee-sign"></i>799</h4>
                    </div>
                    <a href="#"  >
                        <i className="fa-solid fa-cart-shopping" ></i>
                    </a>
                </div>
                <div className="pro">
                    <img src="../img/products/n2.jpg" alt=""/>
                    <div className="des">
                        <span>US POLO</span>
                        <h5>Animation Astronaut T-Shirts</h5>
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <h4><i className="fa-solid fa-indian-rupee-sign"></i>899</h4>
                    </div>
                    <a href="#"  >
                        <i className="fa-solid fa-cart-shopping" ></i>
                    </a>
                </div>
                <div className="pro">
                    <img src="../img/products/n3.jpg" alt=""/>
                    <div className="des">
                        <span>US POLO</span>
                        <h5>Animation Astronaut T-Shirts</h5>
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <h4><i className="fa-solid fa-indian-rupee-sign"></i>699</h4>
                    </div>
                    <a href="#"  >
                        <i className="fa-solid fa-cart-shopping" ></i>
                    </a>
                </div>
                <div className="pro">
                    <img src="../img/products/n4.jpg" alt=""/>
                    <div className="des">
                        <span>US POLO</span>
                        <h5>Animation Astronaut T-Shirts</h5>
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <h4><i className="fa-solid fa-indian-rupee-sign"></i>649</h4>
                    </div>
                    <a href="#"  >
                        <i className="fa-solid fa-cart-shopping" ></i>
                    </a>
                </div>
                <div className="pro">
                    <img src="../img/products/n5.jpg" alt=""/>
                    <div className="des">
                        <span>US POLO</span>
                        <h5>Animation Astronaut T-Shirts</h5>
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <h4><i className="fa-solid fa-indian-rupee-sign"></i>749</h4>
                    </div>
                    <a href="#"  >
                        <i className="fa-solid fa-cart-shopping" ></i>
                    </a>
                </div>
                <div className="pro">
                    <img src="../img/products/n6.jpg" alt=""/>
                    <div className="des">
                        <span>US POLO</span>
                        <h5>Animation Astronaut T-Shirts</h5>
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <h4><i className="fa-solid fa-indian-rupee-sign"></i>999</h4>
                    </div>
                    <a href="#"  >
                        <i className="fa-solid fa-cart-shopping" ></i>
                    </a>
                </div>
                <div className="pro">
                    <img src="../img/products/n7.jpg" alt=""/>
                    <div className="des">
                        <span>US POLO</span>
                        <h5>Animation Astronaut T-Shirts</h5>
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <h4><i className="fa-solid fa-indian-rupee-sign"></i>599</h4>
                    </div>
                    <a href="#"  >
                        <i className="fa-solid fa-cart-shopping" ></i>
                    </a>
                </div>
                <div className="pro">
                    <img src="../img/products/n8.jpg" alt=""/>
                    <div className="des">
                        <span>US POLO</span>
                        <h5>Animation Astronaut T-Shirts</h5>
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <h4><i className="fa-solid fa-indian-rupee-sign"></i>849</h4>
                    </div>
                    <a href="#"  >
                        <i className="fa-solid fa-cart-shopping" ></i>
                    </a>
                </div>
                
            </div>
        </section>
        <section id="sm-banner" className="section-p1">
            <div className="banner-box">
                <h4>Crazy Deals</h4>
                <h2>buy 1 get 1 free</h2>
                <span>The best classic dress is on sale at our site</span>
                <button className="white">Learn More</button>
            </div>
            <div className="banner-box banner-box2">
                <h4>Spring & Summer</h4>
                <h2>Upcoming Seasons</h2>
                <span>The best classic dress is on sale at our site</span>
                <button className="white">Learn More</button>
            </div>
        </section>
        <section id="banner3"> 
            <div className="banner-box">
                <h2>Upcoming Seasons</h2>
                <h3>Winter <span>Collection 50%</span> OFF </h3>
            </div>
            <div className="banner-box banner-box2">
                <h2>Upcoming Seasons</h2>
                <h3>Winter <span>Collection 50%</span> OFF </h3>
            </div>
            <div className="banner-box banner-box3">
                <h2>Upcoming Seasons</h2>
                <h3>Winter <span>Collection 50%</span>  OFF </h3>
            </div>
        </section>
        <section id="newsletter" className="section-p1 section-m1">
            <div className="newstext">
                <h4>SignUp For Newsletters</h4>
                <p>Get E-Mail Updates about our latest shop and <span> special offers.</span></p>
            </div>
            <div className="form">
                <input type="text" name="" placeholder="Your email address " id=""/>
                <button className="normal">Sign Up</button>
            </div>
        </section>
        </Fragment>
  )
}

export default Home
