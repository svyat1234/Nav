const sliders = () => {
    $(document).ready(function () {
        if (document.location.pathname === "/index.html") {
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