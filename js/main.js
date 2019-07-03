import '../scss/reset.scss'
import '../scss/style.scss'


document.addEventListener('DOMContentLoaded', ()=> {

    ///////// Arrow flip animation ////////////
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

    /////// END Arrow flip animation END ////////

    ////////// START Project Hover Event Listeners START //////////////


    let endeavCon = $('#endeav-container');
    let endeavImg = $('#endeav-img');
    let skateCon = $('#skate-container');
    let skateImg = $('#skate-img');

    endeavCon.hover(()=>{
        endeavImg.attr("src", "https://media.giphy.com/media/kBqiBso7bdMDIicTbc/giphy.gif")
    }, ()=>{
        endeavImg.attr("src", "https://i.imgur.com/rYCcQVl.png")
    });

    skateCon.hover(() => {
        skateImg.attr("src", "https://media.giphy.com/media/ibjeJHmzXjPFdJlpbW/giphy.gif")
    }, () => {
        skateImg.attr("src", "https://i.imgur.com/MLum5CJ.png")
    });

    ////////// END Project Hover Event Listeners END //////////////

    ////////// Mobile Event Listeners /////////////////////

    endeavCon.addEventListener('touchstart', () => {
        endeavImg.attr("src", "https://media.giphy.com/media/kBqiBso7bdMDIicTbc/giphy.gif");
    });

    endeavCon.addEventListener('touchend', () => {
        endeavImg.attr("src", "https://i.imgur.com/rYCcQVl.png");
    });

    skateCon.addEventListener('touchstart', () => {
        skateImg.attr("src", "https://media.giphy.com/media/ibjeJHmzXjPFdJlpbW/giphy.gif")
    });

    skateCon.addEventListener('touchend', () => {
        skateImg.attr("src", "https://i.imgur.com/MLum5CJ.png")
    });





});

