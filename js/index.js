document.addEventListener("DOMContentLoaded", function(){


const menu = document.querySelector('.menu2');
const burger = document.querySelector('.burger');

burger.addEventListener('click', function () {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});



    
const receipt = document.querySelector('.receipt');
const cards = document.querySelector('.cards');

cards.addEventListener('click', function() {

 receipt.style.display = "block";
});

receipt.addEventListener('click', function() {

 receipt.style.display = "none";
});



const receipt2 = document.querySelector('.receipt2');
const ring = document.querySelector('.ring');

ring.addEventListener('click', function() {

 receipt2.style.display = "block";
});

receipt2.addEventListener('click', function() {

 receipt2.style.display = "none";
});


const receipt3 = document.querySelector('.receipt3');
const watch = document.querySelector('.watch');

watch.addEventListener('click', function() {

 receipt3.style.display = "block";
});

receipt3.addEventListener('click', function() {

 receipt3.style.display = "none";
});



const receipt4 = document.querySelector('.receipt4');
const umbrella = document.querySelector('.umbrella');

umbrella.addEventListener('click', function() {

 receipt4.style.display = "block";
});

receipt4.addEventListener('click', function() {

 receipt4.style.display = "none";
});



const receipt5 = document.querySelector('.receipt5');
const tote_bag = document.querySelector('.tote_bag');

tote_bag.addEventListener('click', function() {

 receipt5.style.display = "block";
});

receipt5.addEventListener('click', function() {

 receipt5.style.display = "none";
});



const receipt1 = document.querySelector('.receipt1');
const lighter = document.querySelector('.lighter');

lighter.addEventListener('click', function() {

 receipt1.style.display = "block";
});

receipt1.addEventListener('click', function() {

 receipt1.style.display = "none";
});


function updateAllClocks() {
    // Находим ВСЕ элементы с классом .clock
    const clockElements = document.querySelectorAll('.clock');
    
    function getCurrentTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }
    

    clockElements.forEach(clock => {
        clock.textContent = getCurrentTime();
    });
    

    setInterval(() => {
        clockElements.forEach(clock => {
            clock.textContent = getCurrentTime();
        });
    }, 1000);
}

window.addEventListener('DOMContentLoaded', updateAllClocks);








/*
window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1,
    effects: true,
    smoothTouch: 0.1
  });
});
*/


});