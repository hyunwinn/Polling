var slides = document.querySelectorAll("#slides > a");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var current = 0;

showSlides(current);        // 현재 이미지 표시
prev.onclick = prevSlide;   // 이전 이미지 표시
next.onclick = nextSlide;   // 다음 이미지 표시

function showSlides(n) {
    for (var i = 0; i < slides.length; i++){    // 배열의 처음부터 끝까지 반복    
        slides[i].style.display = "none";       //이미지를 감춤
    }

    for (var j = n; j < n+5; j++){
        slides[j].style.display = "block";      // 이미지 5개 화면에 표시
    }
}

function prevSlide() {
    if(current > 0) current -= 1;
    showSlides(current);
}

function nextSlide() {
    if(current < 10) current += 1;  //  함수 current의 최대값을 10으로 지정 -- 10일시 마지막 후보 5명을 표시
    showSlides(current);
}