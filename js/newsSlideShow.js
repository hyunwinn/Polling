var slideIndex = 0;

window.onload=function(){
    showNewsSlides(slideIndex);

    var sec = 2000;
    setInterval(function(){
      slideIndex++;
      showNewsSlides(slideIndex);
  
    }, sec);
}

function currentNewsSlide(n) {
    slideIndex = n;
    showNewsSlides(slideIndex);
}

function showNewsSlides(n) {
    var newsSlide = document.querySelectorAll("#newsSlide li");
    var dot = document.querySelectorAll("#dot");

    for(let i=0; i < newsSlide.length; i++){
        newsSlide[i].style.display="none";
        dot[i].style.background="#bbb";
    }

    if((slideIndex + 1) > newsSlide.length) {
        slideIndex = 0; n = 0;
    }

    newsSlide[n].style.display="block";
    dot[n].style.background="#717171";
}