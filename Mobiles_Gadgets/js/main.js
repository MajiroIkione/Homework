function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
        }
    }
}

let burger = document.querySelector('.burger__btn');
const burgerMenu = document.querySelector('.burger__menu')

document.addEventListener('click', (e) =>{
    console.log(e.target)
    if(e.target.matches('.burger__btn')){
    burger.classList.toggle('burger__btn--active')
    burgerMenu.classList.toggle('active')
    }
})
