// components/rentalAdd-tag.js

class rentTag extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <script src="./controler.js"></script>
     <link rel="stylesheet" href="../../style/shop/rentalAddBar.css" />
     <div id="rental-banner">
<div class="rental-banner">
  <!-- Decorative elements -->
  <div class="decorative-circle"></div>
  <div class="decorative-circle-2"></div>

  <!-- Content Section -->
  <div class="banner-content">
    <div class="availability-tag">Available Items</div>

    <h1 class="banner-title">Browser Quality Rental treasures</h1>

    <p class="banner-description">
      We have prepared special discounts for you on Rental products...
    </p>

    <button class="rent-button">
      Rent Item
      <span class="arrow-icon">→</span>
    </button>
  </div>

  <!-- Image Section with rental items -->

</div>
</div>
`;
  }
}

customElements.define("rentadd-tag", rentTag);
