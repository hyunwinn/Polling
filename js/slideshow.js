var slides = document.querySelectorAll("#slides > a");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var current = 0;

showSlides(current);        // 현재 이미지 표시
prev.onclick = prevSlide;   // 이전 이미지 표시
next.onclick = nextSlide;   // 다음 이미지 표시

function showSlides(n) {

    var slides = document.querySelectorAll("#slides > a");
    for (var i = 0; i < slides.length; i++){    // 배열의 처음부터 끝까지 반복    
        slides[i].style.display = "none";       //이미지를 감춤
    }

    for (var j = n; j < n+5; j++){
        slides[j].style.display = "block";      // 이미지 5개 화면에 표시   
    }
    
    setTimeout(nextSlide, 2000); // 2초마다 자동으로 다음 슬라이드
    


}

function prevSlide() {
    if(current > 0) current -= 1; // 이전슬라이드로 이동
    if(current == 0) current = 14; // 반복을 위해 추가함
    showSlides(current);
}

function nextSlide() {
    if(current < 15) current += 1; // 다음 슬라이드로 이동
    if(current == 15) current = 0; // 반복을 위해 추가함
    showSlides(current);
}