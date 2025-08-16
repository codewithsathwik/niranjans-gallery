// image clicking
document.querySelectorAll(".main-art img").forEach(image => {
  image.onclick = () => {
    document.querySelector(".popup-image").style.display = "block";
    document.querySelector(".popup-image img").src = image.getAttribute("src");
  };
});


// x button
document.querySelector(".popup-image span").onclick=() =>{
    document.querySelector(".popup-image").style.display = "none";
}