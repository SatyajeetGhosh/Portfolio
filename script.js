// Pre Loader
window.onload = function(){
    document.getElementById('pre-loader').style.display="none";
    document.getElementById('main-container').style.display="block";
};

// Scroll to Top Button
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    if(pos > 100){
        scrollProgress.style.display = "block";
    }
    else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    })
}
window.onscroll = calcScrollValue;

// Making Navbar Responsive
$(document).ready(function(){
    $(".bars i").click(function(){
        $(this).toggleClass("fa-times");
        $(".nav-links").toggleClass("mobile-view");
    });
});

// Qualification Section
let eduBtn = document.getElementById("edu-btn");
let expBtn = document.getElementById("exp-btn");
let eduSec = document.getElementById("education");
let expSec = document.getElementById("experience");

eduBtn.addEventListener("click", () => {
    eduSec.style.display = "block";
    expSec.style.display = "none";
});

expBtn.addEventListener("click", () => {
    expSec.style.display = "block";
    eduSec.style.display = "none";
})

// Footer Quote Api
const api = 'https://dummyjson.com/quotes/random';
const showQuote = document.getElementById('quote');
const showAuthor = document.getElementById('author');

async function getQuote(url){
    await fetch(url).then(data => data.json()).then(item => {
        showQuote.innerText = item.quote
        showAuthor.innerText = item.author
    })
}

getQuote(api)