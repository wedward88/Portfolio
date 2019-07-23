import '../scss/reset.scss'
import '../scss/style.scss'


document.addEventListener('DOMContentLoaded', ()=> {

    ///////// Arrow flip animation ////////////
    
    window.onscroll = () => {
        let currScrollTop = $(window).scrollTop();
        let winHeight = $(window).height()
        let currScrollMid = (currScrollTop + winHeight / 2)
        let arrow = $(".down-icon .iconify");
        
        let arrowUp = currScrollMid > arrow.offset().top
        arrow.toggleClass("flipped", arrowUp)

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
});

