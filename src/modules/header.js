const header = () => {
    const header = document.querySelector('.header')
    const headerLinks = document.querySelectorAll('.header__nav__link')
    const facebook = document.querySelector('.header__contacts__block-facebook')
    const insta = document.querySelector('.header__contacts__block-insta')
    const vk = document.querySelector('.header__contacts__block-vk')
    const logo = document.querySelector('.logo__link__img')
    const active = document.querySelector('.header__nav__link-active')

    let width = document.documentElement.clientWidth

    if(width > 850) {
        window.addEventListener('scroll', () => {
            let value = window.scrollY
            if (value > 1 && value <= 500) {
                header.style.transform = "translateY(-100px)"
            } else if (value > 500) {
                header.style.transform = "translateY(0)"
                header.classList.add('header-active')
                headerLinks.forEach(headerLink => {
                    headerLink.classList.add('header__nav__link-dark')
                    headerLink.style.color = "#000"
                })
        
                active.classList.add('header__nav__link-active-dark')
        
                facebook.style.background = "url('./img/social/facebook-dark.png') no-repeat center / cover"
                insta.style.background = "url('./img/social/insta-dark.png') no-repeat center / cover"
                vk.style.background = "url('./img/social/vk-dark.png') no-repeat center / cover"
                logo.style.background = "url('./img/logo-dark.png') no-repeat center / cover"
            } else  {
                header.style.transform = "translateY(0)"
                header.classList.remove('header-active')
        
                active.classList.remove('header__nav__link-active-dark')
        
                headerLinks.forEach(headerLink => {
                    headerLink.classList.remove('header__nav__link-dark')
                    headerLink.style.color = "#fff"
                })
                facebook.style.background = "url('./img/social/facebook.png') no-repeat center / cover"
                insta.style.background = "url('./img/social/insta.png') no-repeat center / cover"
                vk.style.background = "url('./img/social/vk.png') no-repeat center / cover"
                logo.style.background = "url('./img/logo.png') no-repeat center / cover"
            }
        
        })

    }





}

export default header