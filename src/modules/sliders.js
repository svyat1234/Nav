const sliders = () => {
    let value = document.documentElement.clientWidth
    $(document).ready(function () {
        if(value > 850) {
            if (document.location.pathname === "/Navigation/index.html" || document.location.pathname === "/Navigation/" || document.location.pathname === "/index.html") {
                $('.reviews-slider').slick({
                    slidesToShow: 3,
                    speed: 1000,
                    autoplay: true,
                    centerMode: true,
                    centerPadding: 0,
                    pauseOnHover: false
                });   
            } 
        } else {
            if (document.location.pathname === "/Navigation/index.html" || document.location.pathname === "/Navigation/" || document.location.pathname === "/index.html") {
                $('.reviews-slider').slick({
                    slidesToShow: 1,
                    speed: 1000,
                    autoplay: true,
                    centerMode: true,
                    centerPadding: 0,
                    pauseOnHover: false
                });   
            } 
        }
    })    
}

export default sliders