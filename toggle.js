/*///////////////*/
/* toggle.js v.1.0
/*///////////////*/
console.log("toggle.js ready")
/*///////////////*/
//toggle events//
/*///////////////*/
//* ==== this toggle ===*//
function toggleThis(element, activeClass) {

  var classArray = element.className.split(" ");

  var elementIndex = classArray.indexOf(activeClass);

  if (classArray.length >= 2){

    classArray.splice(elementIndex);

    element.className = classArray.join();

  }else{

    classArray.push(activeClass);

    element.className = classArray.join(" ");

  }
}
//*==== parent toggle ===*//
function parentToggle(thisElement,activeClass){

  var parentElement = thisElement.parentNode;

  toggleThis(parentElement, activeClass);
}
/*=== next sibling toggle ====*/
function nextSiblingToggle(element,activeClass){
  var thisElement = element.nextElementSibling;
  // console.log(nextElement.nextElementSibling)
  toggleThis(thisElement, activeClass);
}
/*=== previous sibling toggle ====*/
function prevSiblingToggle(prevElement,activeClass){
  var thisElement = prevElement.previousElementSibling;
  // console.log(nextElement.nextElementSibling)
  toggleThis(thisElement, activeClass);
}

/*=== id toggle ===*/
function idToggle(elementId,activeClass){

  var parentElement = document.getElementById(elementId);

  toggleThis(parentElement, activeClass);

}
/*=== tagname toggle ===*/

function tagNameToggle(tagName,activeClass,tagNameIndex){

  var tagNameCollection = document.getElementsByTagName(tagName);

  for (var i = 0; i < tagNameCollection.length; i++) {
    var parentElement = tagNameCollection[tagNameIndex];
  }
  toggleThis(parentElement, activeClass);

}
/*== tabs toggle ==*/
function tabToggle(number,element,activeClass){

  elIndex = number;

  var el = document.getElementsByClassName(element);

  for (var i = 0; i < el.length; i++) {

    el[i].className = element;

  }

  el[elIndex-1].className += activeClass;

}
/*==================*/

var slideIndex;

var frameCont = document.getElementById("framecont");
var slides = document.getElementsByClassName("slide");
// var frameNum = document.getElementById("currentFrameNumber");
slideIndex = 1;
offsetWidth = 0;

gallerySlider(slideIndex);

/*========*/
function sliderPlus(num){

  gallerySlider(slideIndex += num);

}
window.onresize = function(){

  var offsetWidth = slides[slideIndex-1].offsetLeft;

  frame.style.transform = "translate(-"+ offsetWidth +"px,0)"
}
/*========*/

function gallerySlider(num){

  if(num > slides.length){
    slideIndex = 1;
  }

  if(num < 1){
    slideIndex = slides.length;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].className = "slide";
  }

  slides[slideIndex-1].classList = "slide active";

  /*--- check width --*/
  var offsetWidth = slides[slideIndex-1].offsetLeft;

  // console.log("offsetwidth",offsetWidth);
  // console.log("index",slideIndex);

  // frameNum.innerHTML = parseInt(slideIndex);

  frame.style.transform = "translate(-"+ offsetWidth +"px,0)"

  frameCont.className = "framecont-" + slideIndex + "";
}

/*========*/
