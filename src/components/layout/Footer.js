import React, { Fragment } from 'react';
import "../../App.css"

const Footer = () => {
  return (
    <div>
      <Fragment>
        <footer class="section-p1">
            <div class="col">
                <img class="logo" src="/img/logo2 (1).png" alt=""/>
                <h4>Contact</h4>
                <p><strong>Address: </strong> Room No.06,Vishwakarma Society,Near Ram Mandir</p>
                <p>Dawadi Road,Dombivli(East),Thane 421203.</p>
                <p><strong>Phone No: </strong>+91 8424814474/+91 9324316769</p>
                <p><strong>Hours: </strong>9:00 AM to 8:00 PM From Mon to Sat</p>
            </div>
            <div class="col">
                <h4>About</h4>
                <a href="#">About Us</a>
                <a href="#">Delivery Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Contact Us</a>
            </div>
            
            <div class="col">
                <h4>My Accounts</h4>
                <a href="#">Sign In</a>
                <a href="#">View Cart </a>
                <a href="#">My Wishlist</a>
                <a href="#">Track My Orders</a>
                <a href="#">Help</a>
            </div>
            <div class="col">
                <div class="follow">
                    <h4>Follow us</h4>
                    <div class="icon">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-youtube"></i>
                    </div>
                
                <p>Secured Payment Gateways</p>
                <a href="#"><img class="logo1" src="/img/banner/gpay.jpg" alt=""/></a>
                <a href="#"><img class="logo1" src="/img/banner/phpay.png" alt=""/></a>
                </div>
            </div>
            <div class="copyright">
                <p> @coyright by aniketvishwakarma - e-commerce website</p>
            </div>
        </footer>
      </Fragment>
    </div>
  )
}

export default Footer
