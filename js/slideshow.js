const slideList = document.querySelector('.slide_list'); // Slide parent dom
const slideContents = document.querySelectorAll('.slide_content'); // each slide dom
const slideBtnNext = document.querySelector('.slide_btn_next'); // next button
const slideBtnPrev = document.querySelector('.slide_btn_prev'); // prev button
const slideLen = (slideContents.length); // slide length
const slideWidth = 200; // slide width
const slideSpeed = 300; // slide speed
const startNum = 5; // initial slide index (0 ~ 4)

slideList.style.width = slideWidth * (slideLen) + "px";

let curIndex = startNum; // current slide index (except copied slide)
let curSlide = slideContents[curIndex]; // current slide dom

slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex)) + "px, 0px, 0px)";

/** Next Button Event */
slideBtnNext.addEventListener('click', function() {
    if (curIndex <= slideLen - 6) {

        slideList.style.transition = slideSpeed + "ms";
        slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 1)) + "px, 0px, 0px)";
    }
    if (curIndex === slideLen - 6) {

        setTimeout(function() {
            slideList.style.transition = "0ms";
            slideList.style.transform = "translate3d(-" + slideWidth * 5 + "px, 0px, 0px)";
        }, slideSpeed);
        curIndex = 4;
    }
    curSlide.classList.remove('slide_active');
    curSlide = slideContents[++curIndex];
    curSlide.classList.add('slide_active');
});

/** Prev Button Event */
slideBtnPrev.addEventListener('click', function() {
    if (curIndex >= 0) {
        slideList.style.transition = slideSpeed + "ms";
        slideList.style.transform = "translate3d(-" + (slideWidth * curIndex) + "px, 0px, 0px)";
    }
    if (curIndex === 0) {
        setTimeout(function() {
            slideList.style.transition = "0ms";
            slideList.style.transform = "translate3d(-" + (slideWidth * (slideLen-10)) + "px, 0px, 0px)";      
        }, slideSpeed);
        curIndex = slideLen-10;
    }

    curSlide.classList.remove('slide_active');
    curSlide = slideContents[--curIndex];
    curSlide.classList.add('slide_active');
});