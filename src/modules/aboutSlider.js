const aboutSlider = () => {
    if(document.location.pathname === "/about.html") {
        const slider = document.querySelector('.info__slider')
        const slides = document.querySelectorAll('.info__slide')
        const dots = document.querySelectorAll('.info__slider__dot')

        let correntSlide = 0

        slides.forEach((slide, i) => {
            slide.style.transition = "opacity 1s"
            if (i > 0 ) {
                slide.style.opacity = 0 
                slide.style.visibility = "hidden" 
            }
        })

        dots[correntSlide].classList.add('info__slider__dot-active')

        
        const prevSlide = (elem, i) => {
            elem[i].style.opacity = 0
        }
        const nextSlide = (elem, i) => {
            elem[i].style.opacity = 1
        }

        slider.addEventListener('click', (e) => {
            slides.forEach(slide => {
                slide.style.visibility = "visible" 
            })
            dots[correntSlide].classList.remove('info__slider__dot-active')
            prevSlide(slides, correntSlide)

            if(e.target.closest('.info__slider__button-next')) {
                correntSlide++
            }
            if(e.target.closest('.info__slider__button-prev')) {
                correntSlide--
            }

            if (e.target.closest('.info__slider__dot')) {

                dots.forEach((dot, i) => {
                    dot.classList.remove('info__slider__dot-active')
                    if(e.target === dot) {
                        correntSlide = i
                        dot.classList.add('info__slider__dot-active')
                    }

                })
            }

            if (correntSlide >= slides.length) {
                correntSlide = 0
            } 

            if (correntSlide < 0) {
                correntSlide = slides.length - 1
            } 

            nextSlide(slides, correntSlide)
            dots[correntSlide].classList.add('info__slider__dot-active')
        })
    } else {
        return
    }
}

export default aboutSlider