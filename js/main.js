
(function ($) {
    "use strict";
  

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
        }
    });

    $(window).on('load', function(){

        history.scrollRestoration = 'manual';

        window.scrollTo(0, 0);

        if(window.location.hash) {
            // window.location.href = 'file:///home/leila/%C3%81rea%20de%20trabalho/TEMPLATES/sitedociro/index.html'
            alert(window.location);
        }      

        
    });

const navbar = document.getElementById('navbarCollapse');

document.querySelectorAll('#navbarCollapse a').forEach(link => {
  link.addEventListener('click', () => {
    const collapse = new bootstrap.Collapse(navbar, {
      toggle: false
    });
    collapse.hide();
  });
});

    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    

    ScrollReveal().reveal('#ciro', {
        origin: "right", 
        distance: "40px", 
        duration: 1600,
        // delay: 500, 
    });
    ScrollReveal().reveal("#title", {
        origin: "bottom",
        distance: "40px",
        duration: 1600,
        delay: 500,
    });
    ScrollReveal().reveal("#compromisso-img", {
        origin: "left",
        distance: "50px",
        duration: 1200,
    });
    ScrollReveal().reveal("#compromisso-h1", {
        origin: "bottom",
        distance: "50px",
        duration: 1000,
        delay: 300
    });
    ScrollReveal().reveal("#compromisso-p", {
        origin: "bottom",
        distance: "50px",
        duration: 1000,
        delay: 600
    });
     ScrollReveal().reveal("#acoes", {
        origin: "bottom",
        distance: "65px",
        duration: 1000,
        delay: 500
    });
    ScrollReveal().reveal("#title-projects", {
        origin: "bottom",
        distance: "40px",
        duration: 1000
    });

    
})(jQuery); 

