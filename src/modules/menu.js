import { animate } from './helpers'
const menu = () => {
    let value = document.documentElement.clientWidth
    const menuBtn = document.querySelector('.header__content')
    const menu = document.querySelector('.header__info')
    const links = document.querySelectorAll('.header__nav__link')

    if(value < 850) {
        menuBtn.addEventListener('click', (e) => {
            if(e.target.classList.contains('header__content')) {
                menu.classList.add('header__info-active')
                document.querySelector('.header__nav-close').style.display = "block"
                animate({
                    duration: 300,
                    timing(timeFraction) {
                      return timeFraction;
                    },
                    draw(progress) {
                        menu.style.opacity = progress
                    }
                  });
    
                links.forEach(link => {
                    link.style.color = "#fff"
                })
            }
        menu.addEventListener('click', (e) => {
            if (e.target.classList.contains('header__nav-close')) {
                animate({
                    duration: 300,
                    timing(timeFraction) {
                        return Math.sin(Math.acos(timeFraction));
                    },
                    draw(progress) {
                        menu.style.opacity = progress
                        if (progress === 0) {
                            menu.classList.remove('header__info-active')
                        }
                    }
                  });
            }
        })
        })
    }
 
}

export default menu