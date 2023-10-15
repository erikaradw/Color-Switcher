//DOM JAVASCRIPT For change color
document.querySelector(".switcher-btn").onclick = () => {
  document.querySelector(".color-switcher").classList.toggle("active");
};
let themeButtons = document.querySelectorAll(".theme-button");

//use for each and event listeners for logic change color
themeButtons.forEach((color) => {
  color.addEventListener("click", () => {
    let dataColor = color.getAttribute("data-color");
    document.querySelector(":root").style.setProperty("--main-color", dataColor); //change color property from root
  });
});
