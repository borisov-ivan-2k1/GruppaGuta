// Фиксация шапки при скролле

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
    const nameInput = document.querySelector('.form__name')
    const emailInput = document.querySelector('.form__email')
    const commentInput = document.querySelector('.form__comment')
    const messageBox = document.querySelector('.form__message-box')

    e.preventDefault()

    if (!nameInput.value) {
        nameInput.classList.add('error')
    } else if (!emailInput.value) {
        emailInput.classList.add('error')
        return false
    } else if (!commentInput.value) {
        commentInput.classList.add('error')
        return false
    } else {
        nameInput.classList.remove('error')
        emailInput.classList.remove('error')
        commentInput.classList.remove('error')
        messageBox.style.display = 'flex'
    }

})

//burger menu

const menuBtn = document.querySelector('.bot-header__burger-menu')

menuBtn.addEventListener('click', (e) => {
    const menu = document.querySelector('.bot-header__menu')
    e.preventDefault()
    if (!menu.classList.contains('bot__header-menu_active')) {
        menu.classList.add('bot__header-menu_active')
        menuBtn.classList.add('bot-header__burger-menu_active')
    } else {
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