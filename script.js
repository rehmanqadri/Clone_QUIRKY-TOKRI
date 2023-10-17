




let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}








let searchForm = document.querySelector('.search-form');
if (searchForm=="about"){
  document.querySelector('#search-btn').onclick = () =>{console.log()}
}

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}


document.querySelector('#contact-btn').onclick = () =>{
  console.log(alert("CONTACT ON  +91 9511566221 or VISIT CITY OPTICAL POINT"));
}


window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}







function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);





var paragraph = document.getElementById("paragraph");
var readMore = document.getElementById("readMore");
var readLess = document.getElementById("readLess");
var originalText = paragraph.innerText;
var additionalText = "fident that their livelihood will be protected. OCA Contributors make purchase commitments against a better price early in the season. This gives farmers a";

function showMore() {
    paragraph.innerText = originalText + additionalText;
    readMore.style.display = "none";
    readLess.style.display = "inline";
}

function showLess() {
    paragraph.innerText = originalText;
    readMore.style.display = "inline";
    readLess.style.display = "none";
}








var paragraph1 = document.getElementById("paragraph1");
var readMore1 = document.getElementById("readMore1");
var readLess1 = document.getElementById("readLess1");
var originalText1 = paragraph1.innerText;
var additionalText1 = "enerative organic agriculture and guarantees demand and better prices for their cotton. We offer farmers a sustainable route to safeguarding their livelihoods";

function showMore1() {
    paragraph1.innerText = originalText1 + additionalText1;
    readMore1.style.display = "none";
    readLess1.style.display = "inline";
}

function showLess1() {
    paragraph1.innerText = originalText1;
    readMore1.style.display = "inline";
    readLess1.style.display = "none";
}


var paragraph2 = document.getElementById("paragraph2");
var readMore2 = document.getElementById("readMore2");
var readLess2 = document.getElementById("readLess2");
var originalText2 = paragraph2.innerText;
var additionalText2 = "ners, we offer farmers training and assistance so they feel confident in new practices. Farmers also receive access to non-GMO seed and other bio-inputs to support their";

function showMore2() {
    paragraph2.innerText = originalText2 + additionalText2;
    readMore2.style.display = "none";
    readLess2.style.display = "inline";
}
function showLess2() {
    paragraph2.innerText = originalText2;
    readMore2.style.display = "inline";
    readLess2.style.display = "none";
}



var paragraph3 = document.getElementById("paragraph3");
var readMore3 = document.getElementById("readMore3");
var readLess3 = document.getElementById("readLess3");
var originalText3 = paragraph3.innerText;
var additionalText3 = " social benefits at the farm level. This ensures that cultivating organic cotton in our Farm Programme has measurable benefits for farmers and positive impacts for";
function showMore3() {
    paragraph3.innerText = originalText3 + additionalText3;
    readMore3.style.display = "none"; 1
    readLess3.style.display = "inline";
}

function showLess3() {
    paragraph3.innerText = originalText3;
    readMore3.style.display = "inline";
    readLess3.style.display = "none";
}
document.getElementById("hh").style.color = " #ffffff";