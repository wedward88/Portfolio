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
        console.log(currScrollMid);
        console.log(arrow.offset().top);

        // console.log($(window).scrollTop());
       
        // let scrollBottom = $(window).scrollTop() + $(window).height();
        
        

        // console.log(arrow.height());

        // console.log(winHeight);
        let flipArrow = ((currScrollMid > arrow.offset().top - 10) && (currScrollMid < arrow.offset().top + 10))
        if (currScrollTop > prevScrollTop) {
            
            if (flipArrow ) {
                debugger
                arrow.css({
                    "transform": "rotate(180deg)",
                    "transition": "transform 1s",
                })
            } 
        } else {
            
        if (flipArrow) {
                arrow.css({
                    transform: "rotate(0deg)",
                    transition: "transform 1s",
                })
            } 
        }
        prevScrollTop = currScrollTop;
    };
});

