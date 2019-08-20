import '../scss/reset.scss'
import '../scss/style.scss'


document.addEventListener('DOMContentLoaded', ()=> {

    setTimeout(() => {
        $(".hello").removeClass("welcome-hidden")
    }, 500)

    setTimeout(() => {
        $(".welcome-message").removeClass("welcome-hidden")
    }, 2000)

    ///////// Scroll Animations ////////////
    // let navItems = $('.nav-links li a');
    // let sections = {};
    // Object.values($('.section-head')).forEach(section => sections[$(section).height()] = section )
    // console.log($(sections));

    
    window.onscroll = () => {
        let currScrollTop = $(window).scrollTop();
        let winHeight = $(window).height()
        let currScrollMid = (currScrollTop + winHeight / 2)
        let arrow = $(".down-icon .iconify");
        let navBar = $('#nav-bar');
        let navLinks = $('.nav-links');

        let oddProj = $('.odd-items')
        let evenProj = $('.even-items')
        
        let scrolling = currScrollTop > 0;
        let arrowUp = currScrollMid > arrow.offset().top;
        let transEvens = currScrollMid > evenProj.offset().top - 100 ;
        let transOdds = currScrollMid > oddProj.offset().top - 100 ;

        

        arrow.toggleClass("flipped", arrowUp);
        navBar.toggleClass("nav-show", scrolling);
        navLinks.toggleClass("nav-link-invert", scrolling);


        if (transOdds) oddProj.css({ "transform": "translateX(0em)", "opacity": "100" })
        if (transEvens) evenProj.css({ "transform": "translateX(0em)", "opacity": "100" })
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

