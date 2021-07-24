window.addEventListener("scroll",function(){
  var target = document.getElementById('sticky-ad');
  if(window.pageYOffset > 300){
   target.style.bottom = "0";
  }
},false);