window.addEventListener("resize", () => {
  const container = document.getElementById("sidebar-container");
  const screenWidth = window.innerWidth;

  const currentTag = container.firstElementChild?.tagName.toLowerCase();
  const newTag = screenWidth < 1140 ? "filterbarsmall-tag" : "filterbar-tag";

  if (currentTag !== newTag) {
    container.innerHTML = `<${newTag}></${newTag}>`;
  }
});
