var btn = document.getElementsByClassName("mobileDropDown");
var i;

var timer = function Timer(){
  sliderPlus(1);
}
var beginTimer = setInterval(timer,3000);
function endTimer(){
  clearInterval(beginTimer);
}
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click",function(){
    toggleThis(this,"active");
    var childNav = this.nextElementSibling;
    if(childNav.style.maxHeight){
      childNav.style.maxHeight = null;
    }else{
      childNav.style.maxHeight = childNav.scrollHeight + "px";
    }
  });
}
/*===========*/
var toolTipBtn = document.getElementsByClassName("tool-tip-btn");
var toolTip = document.getElementsByClassName("tool-tip");

function toggleTip(){
  for (var i = 0; i < toolTip.length; i++) {
    toolTip[i].className = "tool-tip";
  };
  for (var i = 0; i < toolTipBtn.length; i++) {
    toolTipBtn[i].className = "tool-tip-btn";
  };
  toggleThis(this,'active');
  nextSiblingToggle(this,'active');
}
function closeTip(){
  for (var i = 0; i < toolTip.length; i++) {
    toolTip[i].className = "tool-tip";
  };
  for (var i = 0; i < toolTipBtn.length; i++) {
    toolTipBtn[i].className = "tool-tip-btn";
  };
}
for (var i = 0; i < toolTipBtn.length; i++) {
  toolTipBtn[i].addEventListener("click",toggleTip,false);
}
for (var i = 0; i < toolTip.length; i++) {
  toolTip[i].addEventListener("click",closeTip,false);
}
