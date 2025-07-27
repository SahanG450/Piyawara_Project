// Add click functionality to the rent button
document.querySelector(".rent-button").addEventListener("click", function () {
  console.log("Rent Item clicked");
  // Add your rental page navigation logic here
  // window.location.href = '/rental-page';
});

// CSS animation keyframes
const style = document.createElement("style");
style.textContent = `
            @keyframes float {
                0% { transform: translateY(0px) rotate(var(--initial-rotation, 0deg)); }
                100% { transform: translateY(-10px) rotate(var(--initial-rotation, 0deg)); }
            }
        `;
document.head.appendChild(style);

// Start animations when page loads
window.addEventListener("load", animateItems);
