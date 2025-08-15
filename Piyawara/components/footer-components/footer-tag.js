class FooterTag extends HTMLElement {
  connectedCallback() {
    const cssPath = "/style/footer.css";
    const assetBase = "/assets";
    const iconBase = `${assetBase}/footer-icons`;
    this.innerHTML = `
      <link rel="stylesheet" href="${cssPath}">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Titan+One&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Istok+Web:ital,wght@0,400;0,700;1,400;1,700&family=Titan+One&display=swap" rel="stylesheet">

            <div class="footer">
            <div></div>
            <div class="footer-content">
                        <span class="footer-logo">
                            <img src="${assetBase}/logo.jpg">
                            <div>
                                <div class="footer-logo-tittle">Piyawara</div>
                                <div class="footer-logo-sub-tittle">Where Your Own Market</div>
                            </div>
                        </span>
                <div class="footer-company">
                    <div  class="footer-tittle">Company</div>
                    <span>About Us</span>
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                    <span>Help</span>
                    <span>FAQ</span>
                </div>
                <div class="footer-account">
                    <div class="footer-tittle">Account</div>
                    <span>Sign In</span>
                    <span>Sign Up</span>
                    <span>My Wishlist</span>
                    <span>View My Cart Items</span>
                    <span>Shipping Details</span>
                </div>
                <div class="footer-category">
                    <div  class="footer-tittle">Category</div>
                    <span>Food & Meals</span>
                    <span>Fresh Fruits, Vegetable </span>
                    <span>and flowers</span>
                    <span>Creative crafts and </span>
                    <span>Tailoring Items</span>
                    <span>Herbal & Medicinal Items</span>
                </div>
                <div class="footer-contact">
                    <div  class="footer-tittle">Contact Us</div>
                    <span class="footer-contact-info">
                                    <img src="../../assets/footer-section/email.png">
                                    <div>piyawara@gimal.com</div>
                                </span>
                    <span class="footer-contact-info">
                                    <img src="../../assets/footer-section/call.png">
                                    <div>+94-70 480 5683(Sri Lanka)</div>
                                </span>
                </div>
            </div>
            <div class="footer-bottom">
                <div>Copyright © 2025  Piyawara | All Right Reserved</div>
                <div>
                    <span><img src="../../../assets/footer-section/facebook.png"></span>
                    <span><img src="../../../assets/footer-section/instagram.png"></span>
                    <span><img src="../../../assets/footer-section/linkedin.png"></span>
                    <span><img src="../../../assets/footer-section/twitter.png"></span>
                </div>
            </div>
        </div>
    `;
  }
}

customElements.define("footer-tag", FooterTag);
