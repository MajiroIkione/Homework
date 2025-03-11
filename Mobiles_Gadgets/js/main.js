let burger = document.querySelector('.burger__btn');

burger.addEventListener('click', () =>{
    burger.classList.toggle('burger__btn--active')
    document.querySelector('.nav__list').classList.toggle('open')
})