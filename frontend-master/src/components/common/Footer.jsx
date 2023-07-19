import React from "react";

const Footer = ({ img }) => {
  return (
    <footer>
        <section className="foot-grid">
            <div className="quick-links">
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="home-page.html">Home</a></li>
                    <li><a href="detail-page.html">Things to do</a></li>
                    <li><a href="map.html">Tourist Attraction</a></li>
                    <li><a href="favourite.html">Favourite</a></li>
                </ul>
            </div>
            <div className="address">
                <h2>Address</h2>
                <p>14, 1 Ellis bridge ST,<br />
                    auckland 3500, Ethiopia <br />
                    +15 9900 990 009 <br />
                    contactus@wanderlust.com</p>
            </div>
            <div className="subs-news">
                <label for="text">Subscribe to our newsletter</label>
                <div className="form-element">
                    <input className="input" type="text" placeholder="Your email" />
                    <span><i className="fas fa-chevron-down"></i></span>
                </div>
            </div>
        </section>
        <section>
        <div className="copyright">
            WANDERLUST © All Rights Reserved
        </div>
        </section>    
    </footer>
  );
};

export default Footer;
