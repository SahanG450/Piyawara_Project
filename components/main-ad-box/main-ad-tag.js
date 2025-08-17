class mainAdTag extends HTMLElement{
    const

    connectedCallback() {
        const img = this.getAttribute('img');
        const discount = this.getAttribute('discount');
        const currentPrice = this.getAttribute('currentPrice');
        const oldPrice = this.getAttribute('oldPrice');
        const productName = this.getAttribute('productName');
        const producerName = this.getAttribute('producerName');

        this.innerHTML = `
        <div class="ad-box">
            <div class="ad-image">
                <img src="${img}">
            </div>
            <div class="ad-detail">
                <div class="ad-option">
                    <div class="discount">
                        <div>save</div>
                        <div>
                            Rs.${discount}
                        </div>
                    </div>
        
                    <div style="display: flex; flex-direction: row;">
                        <div><img src="../assets/header-icons/heart.png" class="ad-option-img"></div>
                        <div><img src="../assets/header-icons/addToCart.png" class="ad-option-img"></div>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="product-name">${productName}</div>
                        <div class="producer-name">By ${producerName}</div>
                        <div class="price">
                            <span class="current-price">Rs. ${currentPrice}</span>
                            <span class="old-price">Rs. ${oldPrice}</span>
                        </div>
                    </div>
                </div>
                <div class="ad-buttons">
                    <button class="btn-veiw-ad">
                        View
                    </button>
                    <button  class="btn-buy-ad">
                        Buy
                    </button>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('main-ad-tag', mainAdTag);