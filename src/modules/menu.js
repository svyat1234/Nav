import { animate } from './helpers'
const menu = () => {
    let value = document.documentElement.clientWidth
    const modalBtn = document.querySelector('.header__content')
    const modal = document.querySelector('.header__info')
    const links = document.querySelectorAll('.header__nav__link')

    if(value < 850) {
        modalBtn.addEventListener('click', (e) => {
            if(e.target.classList.contains('header__content')) {
                modal.classList.add('header__info-active')
                document.querySelector('.header__nav-close').style.display = "block"
                animate({
                    duration: 300,
                    timing(timeFraction) {
                      return timeFraction;
                    },
                    draw(progress) {
                        modal.style.opacity = progress
                    }
                  });
    
                links.forEach(link => {
                    link.style.color = "#fff"
                })
            }
            console.log("ds");
        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('header__nav-close')) {
                animate({
                    duration: 300,
                    timing(timeFraction) {
                        return Math.sin(Math.acos(timeFraction));
                    },
                    draw(progress) {
                        modal.style.opacity = progress
                        if (progress === 0) {
                            modal.classList.remove('header__info-active')
                        }
                    }
                  });
            }
        })
        })
    }
 
}

export default menu