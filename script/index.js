// fixed header

window.onscroll = () => {
    let header = document.querySelector('.header')
    window.pageYOffset > 50 ?
        header.classList.add('header_fixed') :
        header.classList.remove('header_fixed')
}
// show more news


const showMoreBtn = document.querySelector('.news__show-more-btn')

showMoreBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let newsBlock = document.querySelector('.news__images_disable')
    newsBlock.classList.remove('news__images_disable')
    showMoreBtn.style.display = 'none'
})

// mailing

const formBtn = document.querySelector('.form__btn')

formBtn.addEventListener('click', (e) => {
    
    const messageBox = document.querySelector('.form__message-box')
    const labels = document.querySelectorAll('label')

    e.preventDefault()

      if(!labels[0].children[0].value){
        labels[0].classList.add('error-message')
    } else if (!labels[1].children[0].value) {
        labels[1].classList.add('error-message')
        return false
    } else if (!labels[2].children[0].value) {
        labels[2].classList.add('error-message')
        return false
    } else {
        for (i = 0; i < labels.length; i++) {
            labels[i].classList.remove('error-message')
        }
        messageBox.style.display = 'flex'
    }
})

//submenu

const menu = document.querySelectorAll('.bot-header__menu-item')
const submenu = document.querySelector('.submenu')


menu[2].addEventListener("mouseenter", () => {
    submenu.classList.add('submenuShow')
}, false);
submenu.addEventListener("mouseleave", () => {
    submenu.classList.remove('submenuShow')
}, false);

//burger menu

const menuBtn = document.querySelector('.bot-header__burger-menu')

menuBtn.addEventListener('click', (e) => {
    const menu = document.querySelector('.bot-header__menu')
    e.preventDefault()
    if (!menu.classList.contains('bot__header-menu_active')) {
        document.body.style.overflow = 'hidden'
        menu.classList.add('bot__header-menu_active')
        menuBtn.classList.add('bot-header__burger-menu_active')
    } else {
        document.body.style.overflow = 'auto'
        menu.classList.remove('bot__header-menu_active')
        menuBtn.classList.remove('bot-header__burger-menu_active')
    }
    console.log();

})

// bot subscribe


const subscribeBtn = document.querySelector('.footer__subscribe-btn')

subscribeBtn.addEventListener('click', (e) => {
    const subscribeInput = document.querySelector('.footer__subscribe-input')

    e.preventDefault()

    !subscribeInput.value ?
        subscribeInput.classList.add('error') :
        subscribeInput.classList.remove('error')
})