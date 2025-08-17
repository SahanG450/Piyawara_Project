// Add interactive functionality
document.getElementById("sort").addEventListener("change", function (e) {
  console.log("Sort changed to:", e.target.value);
  // Here you would typically trigger a data reload/resort
});

document.getElementById("show").addEventListener("change", function (e) {
  console.log("Items per page changed to:", e.target.value);
  // Here you would typically update the pagination and reload data
});

document.querySelector(".next-page").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Next page clicked");
  // Here you would typically navigate to the next page
});

document.querySelector(".grid-toggle").addEventListener("click", function () {
  this.classList.toggle("active");
  console.log("Grid view toggled");
  // Here you would typically switch between grid and list views
});
