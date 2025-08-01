// components/heder-tag.js

class HederTag extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <link rel="stylesheet" href="../style/header.css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Titan+One&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Istok+Web:ital,wght@0,400;0,700;1,400;1,700&family=Titan+One&display=swap" rel="stylesheet">

      <div>
        <div class="header1" style="width: 100%">
          <span class="content1"><p>FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.</p></span>
          <span class="space"></span>
          <span class="content2">
            <span>
              <span style="margin-right: 5px; font-size: 12px; opacity: 0.85">Until the end of the sale :</span>
              <span style="margin-right: 5px; font-size: 18px">02</span>
              <span style="margin-right: 5px; font-size: 12px; opacity: 0.85">Days .</span>
              <span style="margin-right: 5px; font-size: 18px">12</span>
              <span style="margin-right: 5px; font-size: 12px; opacity: 0.85">Hours .</span>
              <span style="margin-right: 5px; font-size: 18px">34</span>
              <span style="margin-right: 5px; font-size: 12px; opacity: 0.85">Min .</span>
              <span style="margin-right: 5px; font-size: 18px">30</span>
              <span style="margin-right: 5px; font-size: 12px; opacity: 0.85">Sec .</span>
            </span>
          </span>
        </div>

        <div class="header2" style="width: 100%">
          <span class="content4">
            <span style="flex-grow: 1"></span>
            <span class="navigation" style="flex-grow: 3">
              <li><a href="#home">About</a></li>
              <li><a href="#news">My Account</a></li>
              <li><a href="#contact">Wishlist</a></li>
            </span>
            <span style="flex-grow: 2"></span>
          </span>
          <span class="space2"></span>
          <span class="content5">
            <span style="font-family: 'Istok Web', sans-serif;">Buyer</span>
            <span>
              <img src="../assets/header-icons/user-change.png">
            </span>
          </span>
        </div>

        <div class="header3" style="width: 100%">
          <span class="content6">
            <span class="logo">
              <img src="../assets/logo.jpg" class="logoimg">
            </span>
            <span class="logodesc">
              <span class="name">Piyawara</span>
              <span class="moreDesc">Where Your Own Market</span>
            </span>
          </span>
          <span class="content7">
            <input type="text" placeholder="Search for product, category or sellers">
            <img src="../assets/header-icons/search.png" class="imgSearch">
          </span>
          <span class="content8">
            <span>
              <img src="../assets/header-icons/heart.png" class="heartImg">
              <img src="../assets/header-icons/number1.png" class="numberImg">
            </span>
            <span>
              <img src="../assets/header-icons/addToCart.png" class="addToCartImg">
              <img src="../assets/header-icons/number1.png" class="numberImg">
            </span>
            <span><img src="../assets/header-icons/SignIn.png" class="SignInImg"></span>
            <span class="signIn">Sign In</span>
          </span>
        </div>

        <div class="header4" style="width: 100%">
          <span class="mainNav1">
            <span>Home</span>
            <span>Shop</span>
            <span class="category">
              Categories
              <img src="../assets/header-icons/dropdown-arrow.png">
            </span>
            <span>Blog</span>
            <span>Contact</span>
          </span>
          <span class="mainNav2">
            <span>Tranding Products <img src="../assets/header-icons/dropdown-arrow.png"></span>
          </span>
        </div>
      </div>
    `;
  }
}

customElements.define("heder-tag", HederTag);
