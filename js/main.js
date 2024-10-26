const track = document.querySelector(".slider-track");
const clones = track.innerHTML;
track.innerHTML += clones;

// Check the flag on page load
window.addEventListener("load", () => {
  const loadingElement = document.querySelector(".loading");
  const contentBody = document.querySelector(".content-body");

  loadingElement.style.display = "flex";
  contentBody.style.display = "none";

  setTimeout(() => {
    loadingElement.style.display = "none";
    contentBody.style.display = "block";
  }, 3000);
});
