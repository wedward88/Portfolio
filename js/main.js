import '../scss/reset.scss'
import '../scss/style.scss'


document.addEventListener('DOMContentLoaded', ()=> {
    // let bodyHeight = $("body").height() - $(window).height();
    let prevScrollTop = 0;
    window.onscroll = () => {
        // console.log($(window).scrollTop());
        let currScrollTop = $(window).scrollTop();

        if (currScrollTop > prevScrollTop) {
            if ($(window).scrollTop() > 850) {
                $(".down-icon .iconify").css({
                    "transform": "rotate(180deg)",
                    "transition": "transform 1s",
                })
            } 
        } else {
            
            if ($(window).scrollTop() < 850) {
                $(".down-icon .iconify").css({
                    transform: "rotate(0deg)",
                    transition: "transform 1s",
                })
            } 
        }
        prevScrollTop = currScrollTop;
    };
});

