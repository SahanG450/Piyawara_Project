// components/itemcount-tag.js

class countTag extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
     <link rel="stylesheet" href="../../style/itemCount.css" />
     <script src="./controler.js"></script>
<div id="results-header">
<div class="results-header">
  <div class="results-count">Showing all 16 results</div>

  <div class="controls">-
    <div class="sort-section">
      <label for="sort">Sort:</label>
      <select id="sort">
        <option value="latest">Sort by latest</option>
        <option value="oldest">Sort by oldest</option>
        <option value="name">Sort by name</option>
        <option value="popular">Sort by popular</option>
      </select>
    </div>

    <div class="show-section">
      <label for="show">Show:</label>
      <select id="show">
        <option value="20">20 Items</option>
        <option value="10">10 Items</option>
        <option value="50">50 Items</option>
        <option value="100">100 Items</option>
      </select>
    </div>

    <div class="pagination">
      <a href="#" class="next-page">Next page</a>
      <button class="grid-toggle active" title="Grid view">
        <svg class="grid-icon" viewBox="0 0 16 16" fill="currentColor">
          <path
            d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"
          />
        </svg>
      </button>
    </div>
  </div>
</div>
</div>
`;
  }
}

customElements.define("itemcount-tag", countTag);
