const sliders = () => {
    $(document).ready(function () {
        if (document.location.pathname === "/Navigation/index.html" || document.location.pathname === "/Navigation/") {
            $('.reviews-slider').slick({
                slidesToShow: 3,
                speed: 1000,
                autoplay: true,
                centerMode: true,
                centerPadding: 0,
                pauseOnHover: false
            });   
        } 
    })    
}

export default sliders