// components/filterbar-tag.js

class filterTag extends HTMLElement {
  connectedCallback() {
    const fileName = "../../style/sideFilterBar-small.css";

    this.innerHTML = `

  <nav class="filter-sidebar">
  <link rel="stylesheet" href="${fileName}" />
        <!-- Price Filter Section -->
        <div class="filter-section">
          <h3 class="filter-title" onclick="toggleFilter(this, 'priceFilter')">
            Widget price filter
            <span class="price-preview">Rs.0-30</span>
          </h3>
          <div id="priceFilter" class="filter-dropdown">
            <div class="price-filter-content">
              <div class="price-inputs">
                <input type="number" class="price-input" id="minPrice" value="0" placeholder="Min price"/>
                <span class="price-separator">-</span>
                <input type="number" class="price-input" id="maxPrice" value="30" placeholder="Max price"/>
              </div>
              <div class="price-range-container">
                <input type="range" class="price-slider" id="priceRange" min="0" max="100" value="30"/>
              </div>
              <div class="price-display">
                <span class="price-text">Price: Rs.0 — Rs.30</span>
                <button class="filter-button">Filter</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Product Categories Section -->
        <div class="filter-section">
          <h3 class="filter-title" onclick="toggleFilter(this, 'categoryFilter')">Product Categories</h3>
          <div id="categoryFilter" class="filter-dropdown">
            <ul class="category-list">
              ${[
                "Food and Meals",
                "Herbal and Medicine",
                "Grains and Rice",
                "Tailoring Items",
                "Hand Crafts",
                "Flowers and Plants",
                "Catering and food Service",
                "Fruits and Vegetables",
                "Trees Rentals",
                "Renting Items",
                "Auction Items",
              ]
                .map(
                  (cat) => `
                <li class="category-item">
                  <label class="category-checkbox">
                    <div class="checkbox"></div>
                    <span class="category-label">${cat}</span>
                  </label>
                </li>
              `
                )
                .join("")}
            </ul>
          </div>
        </div>

        <!-- Filter by Location Section -->
        <div class="filter-section">
          <h3 class="filter-title" onclick="toggleFilter(this, 'locationFilter')">Filter by Location</h3>
          <div id="locationFilter" class="filter-dropdown">
            <select class="location-select" size="10">
              <option value="">Select Your City</option>
              ${[
                "Colombo",
                "Gampaha",
                "Kalutara",
                "Kandy",
                "Matale",
                "Nuwara Eliya",
                "Galle",
                "Matara",
                "Hambantota",
                "Jaffna",
                "Kilinochchi",
                "Mannar",
                "Vavuniya",
                "Mullaitivu",
                "Batticaloa",
                "Ampara",
                "Trincomalee",
                "Kurunegala",
                "Puttalam",
                "Anuradhapura",
                "Polonnaruwa",
                "Badulla",
                "Moneragala",
                "Ratnapura",
                "Kegalle",
              ]
                .map(
                  (city) =>
                    `<option value="${city
                      .toLowerCase()
                      .replace(" ", "-")}">${city}</option>`
                )
                .join("")}
            </select>
          </div>
        </div>

        <!-- Filter by Brands Section -->
        <div class="filter-section">
          <h3 class="filter-title" onclick="toggleFilter(this, 'brandFilter')">Filter by Brands</h3>
          <div id="brandFilter" class="filter-dropdown">
            <div class="brand-item">
              <label class="brand-checkbox">
                <div class="checkbox"></div>
                <span class="category-label">Fresh</span>
              </label>
              <span class="brand-count">(1)</span>
            </div>
            <div class="brand-item">
              <label class="brand-checkbox">
                <div class="checkbox"></div>
                <span class="category-label">Used</span>
              </label>
              <span class="brand-count">(1)</span>
            </div>
          </div>
        </div>
      </nav>

`;
  }
}

customElements.define("filterbarsmall-tag", filterTag);
