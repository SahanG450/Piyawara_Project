// components/breadTag.js

class breadTag extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
     <link rel="stylesheet" href="../../style/breadcrumb.css" />
<nav class="breadcrumb-container">
  <a href="../index.html">Home</a>
  <span class="breadcrumb-separator">></span>
  <span class="breadcrumb-current">Shop</span>
</nav>
`;
  }
}

customElements.define("bread-tag", breadTag);
