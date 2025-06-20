document.addEventListener("DOMContentLoaded", function(){

    
const receipt = document.querySelector('.receipt');
const cards = document.querySelector('.cards');

cards.addEventListener('click', function() {

 receipt.style.display = "block";
});

receipt.addEventListener('click', function() {

 receipt.style.display = "none";
});



});