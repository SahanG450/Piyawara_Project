// components/advitem-tag.js

class addTag extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
     <link rel="stylesheet" href="../style/main-category-ad.css" />
     <script src="./controler.js"></script>

    <div class="product-card">
      <div class="image-container">
        <img
          src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="Sri Lankan Rice and Curry"
          class="product-image"
        />

        <div class="save-badge">SAVE</div>

        <div class="icon-buttons">
          <button class="icon-btn">
            <svg class="heart-icon" viewBox="0 0 24 24">
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              />
            </svg>
          </button>
          <button class="icon-btn">
            <svg class="cart-icon" viewBox="0 0 24 24">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="m1 1 4 4 14 1-1 7H6" />
            </svg>
          </button>
        </div>
      </div>

      <div class="product-details">
        <h2 class="product-title">Home Rice Curry</h2>
        <p class="seller-name">By Raveen wickramasekoli</p>

        <div class="price-section">
          <span class="current-price">Rs. 300.00</span>
          <span class="original-price">Rs. 350.00</span>
        </div>
        <div class="action-buttons">
          <button class="btn btn-primary">Buy</button>
          <button class="btn btn-secondary">View</button>
        </div>
      </div>
    </div>

`;
  }
}

customElements.define("advitem-tag", addTag);
