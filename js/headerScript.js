window.onload = function(){
    window.addEventListener('scroll',function(e){
        if (window.pageYOffset > 100){
            document.querySelector(".header").classList.add('is-scrolling');
        } else {
            document.querySelector(".header").classList.remove('is-scrolling');
        }
    });
}

const hamburgerButton = document.querySelector('.hamburger');
const mobileNavMenu = document.querySelector('.mobile_nav');

hamburgerButton.addEventListener('click', function(){
    hamburgerButton.classList.toggle("is-active");
    mobileNavMenu.classList.toggle("is-active");
});