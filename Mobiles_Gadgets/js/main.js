
// ////////////////////////////// Drop Nav Menu
const dropdownButton = document.getElementById('dropdown__btn');
const dropdownMenu = document.getElementById('dropdown-menu');

dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});
/////////////////////// Burger drop menu
const dropBurgButton = document.getElementById('dropBurg__btn');
const dropBurgMenu = document.getElementById('dropBurg-menu');

// Добавляем обработчик события на кнопку
dropBurgButton.addEventListener('click', () => {
    dropBurgMenu.classList.toggle('opened');
    
});
////////////////////////////////////////////////Burger Menu

let burger = document.querySelector('.burger__btn');
const burgerMenu = document.querySelector('.burger__menu')

burger.addEventListener('click', () =>{
    burger.classList.toggle('burger__btn--active')
    burgerMenu.classList.toggle('show')
})
burgerMenu.addEventListener('click', (e) =>{
    e.stopPropagation()
})
////////////////////////////////////////////////Slider

const swiper = new Swiper('.slideshow', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});