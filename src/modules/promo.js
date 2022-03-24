const promo = () => {
    const heading = document.querySelector('.promo__info')

    window.addEventListener('scroll', () => {

        let value = window.scrollY

        if (document.location.pathname === "/index.html") {
            if(value >= 1) {
                heading.style.opacity = 0 
             } else {
                heading.style.opacity = 1
             }
        }
    })

}

export default promo