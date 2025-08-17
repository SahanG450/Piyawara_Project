class FooterTag extends HTMLElement {
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
          <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            .newsletter-section {
                background: rgba(118,75,162,0.9);
                color: white;
                padding: 20px 20px;
                text-align: center;
            }

            .newsletter-content {
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                max-width: 1200px;
                height: 100%;
                margin: 0 auto;
            }

            .newsletter-title {
                display: flex;
                margin-top: 12px;
                justify-content: center;
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 10px;
            }

            .newsletter-subtitle {
                font-size: 16px;
                margin-bottom: 30px;
                opacity: 0.9;
            }

            .newsletter-form {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                max-width: 500px;
                margin: 0 auto 7px;
                flex-direction: row;
            }

            .email-input {
                flex: 1;
                min-width: 250px;
                padding: 12px 16px;
                border: none;
                border-radius: 6px;
                font-size: 16px;
                outline: none;
            }

            .send-btn {
                background-color: rgba(23, 80, 48 ,0.9);
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 6px;
                font-size: 16px;
                font-weight: bold;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }

            .newsletter-text{
                margin-right: 40px;
            }

            .send-btn:hover {
                background-color: rgba(23, 80, 48 ,1);
            }

            .terms-text {
                font-size: 12px;
                opacity: 0.8;
            }

            .terms-text a {
                color: #ffeb3b;
                text-decoration: none;
            }

            .footer-main {
                background-color: #f8f9fa;
                padding: 50px 20px 30px;
            }

            .footer-content {
                max-width: 1200px;
                margin: 0 auto;
                display: grid;
                justify-content: center;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 20px;
            }

            .footer-section h3 {
                color: #333;
                font-size: 18px;
                margin-bottom: 20px;
                font-weight: bold;
            }

            .footer-section ul {
                list-style: none;
            }

            .footer-section ul li {
                margin-bottom: 8px;
            }

            .footer-section ul li a {
                color: #666;
                text-decoration: none;
                font-size: 14px;
                transition: color 0.3s ease;
            }

            .footer-section ul li a:hover {
                color: #667eea;
            }

            .contact-info {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 15px;
                justify-content: flex-start;
            }

            .contact-icon {
                width: 24px;
                height: 24px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 12px;
            }

            .app-download {
                display: flex;
                flex-direction: row;
                gap: 10px;
                margin-top: 15px;
            }

            .app-btn {
                background-color: black;
                width: auto;
                height: 40px;
                color: white;
                padding: 8px 12px;
                border-radius: 6px;
                text-decoration: none;
                font-size: 10px;
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 5px;
                transition: background-color 0.3s ease;
            }

            .app-btn:hover {
                background-color: #555;
            }

            .social-links {
                display: flex;
                gap: 10px;
                margin-top: 15px;
            }

            .footer-bottom {
                background-color: #e9ecef;
                padding: 20px;
                text-align: center;
            }

            .footer-bottom-content {
                max-width: 1200px;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 20px;
            }

            .copyright {
                color: #666;
                font-size: 12px;
            }

            .payment-methods {
                display: flex;
                gap: 10px;
                align-items: center;
            }

            .payment-icon {
                width: 40px;
                height: 25px;
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 10px;
                font-weight: bold;
            }

            .bottom-links a {
                color: #666;
                text-decoration: none;
                font-size: 12px;
            }

            .bottom-links a:hover {
                color: #333;
            }

            @media (max-width: 768px) {
                .contact-info {
                    justify-content: center;
                }

                .newsletter-form {
                    flex-direction: column;
                    width: 100%;
                }

                .email-input {
                    width: 100%;
                    min-width: auto;
                }

                .footer-content {
                    grid-template-columns: 1fr;
                    text-align: center;
                }

                .footer-bottom-content {
                    flex-direction: column;
                    text-align: center;
                }

                .social-links{
                    justify-content: center;
                }

                .app-download{
                    justify-content: center;
                }

                .newsletter-text{
                    margin-right: 0;
                }
            }
          </style>

          <div style="font-family: Arial, sans-serif;">
            <section class="newsletter-section">
                <div class="newsletter-content">
                    <div class="newsletter-text">
                        <h2 class="newsletter-title">Join our newsletter for Rs.100 offs</h2>
                        <p class="newsletter-subtitle">Register now to get latest updates on promotions & coupons. Don't worry, we not spam!</p>
                    </div>
                    <div style="margin: 0">
                        <form class="newsletter-form">
                            <div>
                                <input type="email" class="email-input" placeholder="Enter your email address" required>
                            </div>
                            <div>
                                <button type="submit" class="send-btn">SEND</button>
                            </div>
                        </form>

                        <p class="terms-text">
                            By subscribing you agree to our <a href="#">Terms & Conditions</a> and <a href="#">Privacy & Cookies Policy</a>
                        </p>
                    </div>
                </div>
            </section>

            <footer class="footer-main">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>Do You Need Help ?</h3>
                        <p style="color: #666; font-size: 14px; margin-bottom: 20px;">
                            Connect Us On
                        </p>

                        <div class="contact-info">
                            <div class="contact-icon"><img src="../assets/footer-section/call .png" height="100%"></div>
                            <div>
                                <div style="font-size: 12px; color: #666;">Monday-Friday: 08am-5pm</div>
                                <div style="font-size: 16px; font-weight: bold; color: #333;">+9491 1452345</div>
                            </div>
                        </div>

                        <div class="contact-info">
                            <div class="contact-icon"><img src="../assets/footer-section/mail.png" height="100%"></div>
                            <div>
                                <div style="font-size: 12px; color: #666;">Need help with your e-mail?</div>
                                <div style="font-size: 14px; color: #667eea; cursor: pointer">Piyawara@gmail.com</div>
                            </div>
                        </div>
                    </div>

                    <div class="footer-section">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Refund and Returns Policy</a></li>
                            <li><a href="#">Cookie Settings</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h3>Category</h3>
                        <ul>
                            <li><a href="#">Food & Meals</a></li>
                            <li><a href="#">Harbal & Medicine</a></li>
                            <li><a href="#">Grains and Rice</a></li>
                            <li><a href="#">Tailoring & catering</a></li>
                            <li><a href="#">Hand and Crafts</a></li>
                            <li><a href="#">Flower & Plants</a></li>
                            <li><a href="#">Fruits & Vegetables</a></li>
                            <li><a href="#">Rent trees & land</a></li>
                            <li><a href="#">Renting Items</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h3>Account</h3>
                        <ul>
                            <li><a href="#">Sign In</a></li>
                            <li><a href="#">Sign Up</a></li>
                            <li><a href="#">My Wishlist</a></li>
                            <li><a href="#">View My Cart Items</a></li>
                            <li><a href="#">Shipping Details</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h3>Download Our App </h3>
                        <div class="app-download">
                            <a href="#" class="app-btn">
                                <div><img src="../assets/footer-section/google-play.png" style="width: 33px"></div>
                                <div>
                                    <div style="font-weight: bold">Google Play</div>
                                </div>
                            </a>
                            <a href="#" class="app-btn">
                                <div><img src="../assets/footer-section/apple.png" style="width: 33px"></div>
                                <div>
                                    <div style="font-weight: bold">App Store</div>
                                </div>
                            </a>
                        </div>

                        <p style="margin-top: 20px; font-size: 14px; color: #333;">Follow us on social media:</p>
                        <div class="social-links">
                            <a href="#" ><img src="../assets/footer-section/facebook.png" style="width: 33px"></a>
                            <a href="#" ><img src="../assets/footer-section/twitter.png" style="width: 33px ;border-radius: 50%"></a>
                            <a href="#" ><img src="../assets/footer-section/instagram.png" style="width: 33px"></a>
                            <a href="#" ><img src="../assets/footer-section/linkedin.png" style="width: 33px"></a>
                        </div>
                    </div>
                </div>
            </footer>

            <div class="footer-bottom">
                <div class="footer-bottom-content">
                    <div class="copyright">
                        Copyright © 2025  Piyawara. | All Right Reserved. | Powered by Green Lab Solutions.
                    </div>

                    <div class="payment-methods">
                        <div class="payment-icon"><img src="../assets/footer-section/visa.png" style="width: 50px;margin-right: 20px"></div>
                        <div class="payment-icon"><img src="../assets/footer-section/master.png" style="width: 50px"></div>
                        <div class="payment-icon"><img src="../assets/footer-section/pay-pal.png" style="width: 20px"></div>
                    </div>
                </div>
            </div>
          </div>
        `;
    }
}

customElements.define('footer-tag', FooterTag);
