const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

const addcar = document.querySelector(".adca");
const show = document.querySelector(".addcart");
const price = document.querySelector(".price");
const pr = document.querySelector(".pr");
const maincart = document.querySelector(".main-cart");
const close = document.querySelector("#close");
const side =document.querySelector("#inner");
 
addcar.addEventListener("click", () => {
  show.style.display = "grid";
});

close.addEventListener("click", () => {
  show.style.display = "none";
});


 var totalprice=0;

document.body.addEventListener("click", (event) => {
  if (event.target.classList.contains("price")) {
    // Identify which button was clicked
    var clickedButton = event.target.parentNode.parentNode.parentNode;
   
var dd=clickedButton.querySelector(".box-img img");

    const newContentDiv = document.createElement("div");
    newContentDiv.classList.add("pr");
    const prh = document.createElement("h3");
    prh.textContent=event.target.textContent;
    prh.classList.add("prhd");
   
    totalprice += Number((event.target.textContent).substring(1));

    side.textContent= (totalprice)+" $";
    
    const image = document.createElement("img");
    image.src = dd.src;
    image.classList.add("adimg");
    var input = document.createElement("input");
    input.type = "text";
    input.className = "adinput";
    input.placeholder="Add Your Number"
    newContentDiv.appendChild(image);
    newContentDiv.appendChild(input);
    newContentDiv.appendChild(prh);

    // var parentDiv = document.querySelector('.main-cart div').;

    //  document.querySelector("icons. span").textContent= parentDiv ;
    // Append the new content div to the container
    maincart.prepend(newContentDiv);
  }
});


var intervalId = setInterval(function() {

}, 1000);


show.addEventListener("click", (e) => {
  if (e.target.classList.contains(".addcart")) {
    show.style.display = "none";
  }
});
