import '../scss/reset.scss'
import '../scss/style.scss'


document.addEventListener('DOMContentLoaded', ()=> {
    // let bodyHeight = $("body").height() - $(window).height();
    let prevScrollTop = 0;
    
    

    
    window.onscroll = () => {
        let currScrollTop = $(window).scrollTop();
        let winHeight = $(window).height()
        let currScrollMid = (currScrollTop + winHeight / 2)
        let arrow = $(".down-icon .iconify");
        
        let flipArrow = ((currScrollMid > arrow.offset().top - 10) && (currScrollMid < arrow.offset().top + 10))
        if (currScrollTop > prevScrollTop) {
            
            if (flipArrow ) {
                arrow.css({
                    "transform": "rotate(180deg)",
                    "transition": "transform .5s",
                })
            } 
        } else {
            
        if (flipArrow) {
                arrow.css({
                    transform: "rotate(0deg)",
                    transition: "transform .5s",
                })
            } 
        }
        prevScrollTop = currScrollTop;
    };
});

