class categorySearchAdBox extends HTMLElement {
    connectedCallback() {
        const img = this.getAttribute('img');
        const productName = this.getAttribute('productName');
        const producerName = this.getAttribute('producerName');
        const newPrice = this.getAttribute('newPrice');
        const rateCount = this.getAttribute('rateCount');
        const oldPrice = this.getAttribute('oldPrice');

        this.innerHTML = `
            <div class="category-search-ad-box">
            <div class="category-ad-image">
              <div class="category-ad-image-box">
                <img src="${img}">
              </div>
              <div class="category-ad-option">
                <img src="../assets/category-section/shopping-cart%20(1).png" style="width: 30px">
                <img src="../assets/category-section/heart.png" style="width: 30px">
                <img src="../assets/category-section/view-more.png">
              </div>
            </div>
            <div class="category-ad-detail">
              <div class="product-name">${productName}</div>
              <div class="producer-name">By ${producerName}</div>
              <div class="price">
                <span class="current-price">Rs. ${newPrice}</span>
                <span class="old-price">Rs. ${oldPrice}</span>
              </div>
              <div class="rating"  style="margin-top: 2px">
                <span class="star-icon"><img src="../assets/category-section/rating.png"></span>
                <span class="star-icon"><img src="../assets/category-section/rating.png"></span>
                <span class="star-icon"><img src="../assets/category-section/rating.png"></span>
                <span class="star-icon"><img src="../assets/category-section/rating.png"></span>
                <span class="star-icon"><img src="../assets/category-section/rating.png"></span>
                <span class="star-icon">(${rateCount})</span>
              </div>
              <div class="category-ad-button">
                <button class="">Buy Now</button>
              </div>
            </div>
          </div>
        `
    }
}

customElements.define('category-search-ad-box', categorySearchAdBox);