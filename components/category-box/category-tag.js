class categoryBoxTag extends HTMLElement {
    connectedCallback() {
        const img = this.getAttribute('img');
        const desc = this.getAttribute('desc');
        const box = this.getAttribute('box');

        this.innerHTML = `
        <div class="category-box ${box}">
            <div>
                <img src="${img}">
            </div>
            <div>
                <hr>
            </div>
            <div class="category-desc">
                ${desc}
            </div>
        </div>
        `
    }
}

customElements.define('category-box-tag', categoryBoxTag);