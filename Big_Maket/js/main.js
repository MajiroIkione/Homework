(function(){

    document.addEventListener('click', burgerInint)

    function burgerInint(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if(document.documentElement.clientWidth > 900) return

        if (!burgerIcon && !burgerNavLink) return
        
        if(!document.body.classList.contains('body--opened-menu')){
        document.body.classList.add('body--opened-menu')
        } else{
            document.body.classList.remove('body--opened-menu')}
    }


const ModalBtn = document.querySelector('.about__img-button')
const modal = document.querySelector('.modal')


ModalBtn.addEventListener('click', openModal)
modal.addEventListener('click', closeModal)

    function openModal(e){
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e){
        e.preventDefault()

        const target = e.target
        if(target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    }
})()


modal.addEventListener('click', event => {
    const target = event.target
    if(target && target.closest('.modal__cancel') || target.classList.contains('modal')){
        body.classList.remove('body--opened-modal')
    }
} )

document.addEventListener('keydown', event =>{
    if(event.code === 'Escape' && body.classList.contains('body--opened-modal')) {
        body.classList.remove('body--opened-modal')
    }
})
