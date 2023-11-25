
$(function () {
    //     "use strict";

    //     var wind = $(window);

    //     // scrollIt
    //     $.scrollIt({
    //         upKey: 38, // key code to navigate to the next section
    //         downKey: 40, // key code to navigate to the previous section
    //         easing: "swing", // the easing function for animation
    //         scrollTime: 600, // how long (in ms) the animation takes
    //         activeClass: "active", // class given to the active nav element
    //         onPageChange: null, // function(pageIndex) that is called when page is changed
    //         topOffset: -60, // offste (in px) for fixed top navigation
    //     });

    //     // close navbar-collapse when a  clicked
    //     $(".nav a").on("click", function () {
    //         $(".navbar-collapse").removeClass("in").addClass("collapse");
    //     });

    //     // navbar scrolling background
    //     wind.on("scroll", function () {
    //         var bodyScroll = wind.scrollTop(),
    //             navbar = $(".navbar-default"),
    //             h_hight = $(".header").outerHeight();

    //         if (bodyScroll > h_hight) {
    //             navbar.addClass("nav-scroll");
    //         } else {
    //             navbar.removeClass("nav-scroll");
    //         }
    //     });

    // // ^ progress bar
    // wind.on("scroll", function () {
    //     $(".skills .progress .progress-bar").each(function () {
    //         var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();
    //         var myVal = $(this).attr("data-value");
    //         if (bottom_of_window > bottom_of_object) {
    //             $(this).css({
    //                 width: myVal,
    //             });
    //         }
    //     });
    // });

    //     // magnificPopup
    //     $(".portfolio .link").magnificPopup({
    //         delegate: "a",
    //         type: "image",
    //         gallery: {
    //             enabled: true,
    //         },
    //     });



    // ^ === owl carsouel === /////
    $(".owl-carousel").owlCarousel({
        items: 1, // Number of items to display at a time
        loop: true, // Infinite loop
        nav: false, // True to display navigation arrows next/prev buttons.
        dots: true, // Display navigation dots
        margin: 0, // Margin between items

        autoplay: true, // Autoplay the carousel
        autoplayTimeout: 3000, // Autoplay timeout in milliseconds
        autoplayHoverPause: false, // Pause autoplay on hover
        smartSpeed: 600, // Animation speed

        mouseDrag: true, // Mouse drag enabled
        touchDrag: true, // Touch drag enabled

        responsive: {
            0: {
                items: 1
            },
            // 600: {
            //     items: 2
            // },
            // 1000: {
            //     items: 3
            // }
        },

        responsiveClass: false, // Add responsive classes to the carousel container
        // navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"], // Custom navigation text
        dotsEach: false, // Show dots on each item
        center: true, // Center active item
        autoHeight: true, // Automatically set the carousel height
        lazyLoad: false, // Lazy load images
        // animateOut: 'fadeOut', // CSS3 animation out
        // animateIn: 'fadeIn' // CSS3 animation in


    });


    //     // stellar
    //     wind.stellar();

    // countUp
    $(".numbers .counter").countUp({
        delay: 10,
        time: 1500,
    });
});

$(window).on("load", function () {
    // Preloader
    // $(".loading").addClass("loading-end").fadeOut(1000);

    // // isotope
    // $(".services .row").isotope({
    //     // options
    //     itemSelector: ".col-md-4",
    // });

    // // isotope
    $(".gallery").isotope({
        // options
        itemSelector: ".items",
    });

    var $gallery = $(".gallery").isotope({
        // options
    });

    // filter items on button click
    $(".filtering").on("click", "span", function () {
        var filterValue = $(this).attr("data-filter");

        $gallery.isotope({ filter: filterValue });
    });

    $(".filtering").on("click", "span", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });


    // Get the outer height of the current window
    var windowHeight = window.outerHeight;

    // Display the outer height in the console
    console.log('Outer Height: ' + windowHeight + ' pixels');

    // Get the inner height of the current window
    var innerHeight = window.innerHeight;

    // Display the inner height in the console
    console.log('Inner Height: ' + innerHeight + ' pixels');




    window.addEventListener("scroll", function () {
        var scroll = window.scrollY;
        var h_hight = $("#home").outerHeight();
        console.log("scroll: " + scroll);
        console.log("h_hight: " + h_hight);

        if (scroll > h_hight) {
            document.getElementById("navbar").classList.add("nav-scroll");
        } else {
            document.getElementById("navbar").classList.remove("nav-scroll");

        }
    });
});


function filterItems(category) {
    // get all items
    var items = document.querySelectorAll('.items');


    // Display only the selected category  
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })

    // // Perform a smooth transition to rearrange visible items
    // var gallery = document.getElementById('gallery');
    // gallery.style.transform = 'translateY(0)';

    // // After the transition, reset the transform property to avoid interference with future animations
    // setTimeout(function () {
    //     gallery.style.transform = '';
    // }, 300);



};
function copylink1(altText) {
    // Get the image element

    // Get the element with a specific alt attribute
    var selector = 'img[alt="' + altText + '"]';
    var element = document.querySelector(selector);
    console.log(element);

    // Get the image URL
    var imageUrl = element.src
    console.log(imageUrl);

    // Create a new clipboard item
    navigator.clipboard.writeText(imageUrl)
        .then(() => {

            // Add the 'd-appear' class after 1 second
            setTimeout(() => {
                document.getElementById('alert-dark1').classList.add('d-appear');

                // Remove the 'd-appear' class after another second
                setTimeout(() => {
                    document.getElementById('alert-dark1').classList.remove('d-appear');
                }, 1000);
            }, 0);
        })
        .catch(err => {
            document.getElementById('alert-dangerID').classList.add('d-appear');
            console.error('Unable to copy to clipboard', err);
        });
};
function copylink2(altText) {
    // Get the image element

    // Get the element with a specific alt attribute
    var selector = 'img[alt="' + altText + '"]';
    var element = document.querySelector(selector);
    console.log(element);

    // Get the image URL
    var imageUrl = element.src
    console.log(imageUrl);

    // Create a new clipboard item
    navigator.clipboard.writeText(imageUrl)
        .then(() => {

            // Add the 'd-appear' class after 1 second
            setTimeout(() => {
                document.getElementById('alert-dark2').classList.add('d-appear');

                // Remove the 'd-appear' class after another second
                setTimeout(() => {
                    document.getElementById('alert-dark2').classList.remove('d-appear');
                }, 1000);
            }, 0);
        })
        .catch(err => {
            document.getElementById('alert-dangerID').classList.add('d-appear');
            console.error('Unable to copy to clipboard', err);
        });
};
function copylink3(altText) {
    // Get the image element

    // Get the element with a specific alt attribute
    var selector = 'img[alt="' + altText + '"]';
    var element = document.querySelector(selector);
    console.log(element);

    // Get the image UR3
    var imageUrl = element.src
    console.log(imageUrl);

    // Create a new clipboard item
    navigator.clipboard.writeText(imageUrl)
        .then(() => {

            // Add the 'd-appear' class after 1 second
            setTimeout(() => {
                document.getElementById('alert-dark3').classList.add('d-appear');

                // Remove the 'd-appear' class after another second
                setTimeout(() => {
                    document.getElementById('alert-dark3').classList.remove('d-appear');
                }, 1000);
            }, 0);
        })
        .catch(err => {
            document.getElementById('alert-dangerID').classList.add('d-appear');
            console.error('Unable to copy to clipboard', err);
        });
};
function copylink4(altText) {
    // Get the image element

    // Get the element with a specific alt attribute
    var selector = 'img[alt="' + altText + '"]';
    var element = document.querySelector(selector);
    console.log(element);

    // Get the image URL
    var imageUrl = element.src
    console.log(imageUrl);

    // Create a new clipboard item
    navigator.clipboard.writeText(imageUrl)
        .then(() => {

            // Add the 'd-appear' class after 1 second
            setTimeout(() => {
                document.getElementById('alert-dark4').classList.add('d-appear');

                // Remove the 'd-appear' class after another second
                setTimeout(() => {
                    document.getElementById('alert-dark4').classList.remove('d-appear');
                }, 1000);
            }, 0);
        })
        .catch(err => {
            document.getElementById('alert-dangerID').classList.add('d-appear');
            console.error('Unable to copy to clipboard', err);
        });
};
function copylink5(altText) {
    // Get the image element

    // Get the element with a specific alt attribute
    var selector = 'img[alt="' + altText + '"]';
    var element = document.querySelector(selector);
    console.log(element);

    // Get the image URL
    var imageUrl = element.src
    console.log(imageUrl);

    // Create a new clipboard item
    navigator.clipboard.writeText(imageUrl)
        .then(() => {

            // Add the 'd-appear' class after 1 second
            setTimeout(() => {
                document.getElementById('alert-dark5').classList.add('d-appear');

                // Remove the 'd-appear' class after another second
                setTimeout(() => {
                    document.getElementById('alert-dark5').classList.remove('d-appear');
                }, 1000);
            }, 0);
        })
        .catch(err => {
            document.getElementById('alert-dangerID').classList.add('d-appear');
            console.error('Unable to copy to clipboard', err);
        });
};
function copylink6(altText) {
    // Get the image element

    // Get the element with a specific alt attribute
    var selector = 'img[alt="' + altText + '"]';
    var element = document.querySelector(selector);
    console.log(element);

    // Get the image URL
    var imageUrl = element.src
    console.log(imageUrl);

    // Create a new clipboard item
    navigator.clipboard.writeText(imageUrl)
        .then(() => {

            // Add the 'd-appear' class after 1 second
            setTimeout(() => {
                document.getElementById('alert-dark6').classList.add('d-appear');

                // Remove the 'd-appear' class after another second
                setTimeout(() => {
                    document.getElementById('alert-dark6').classList.remove('d-appear');
                }, 1000);
            }, 0);
        })
        .catch(err => {
            document.getElementById('alert-dangerID').classList.add('d-appear');
            console.error('Unable to copy to clipboard', err);
        });
};


document.addEventListener('scroll', function () {
    let scrollTop = window.scrollY;
    let speed = 0.3; // Adjust the speed as needed

    document.querySelector('.parallax-section').style.transform = `translateY(${scrollTop * speed}px)`;
});


