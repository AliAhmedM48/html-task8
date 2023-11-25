
// ! region js basics info
//#region js basics info
// * Both $(function () {}) and $(window).on("load", function () {})
// * are jQuery constructs used to execute code when the document
// * or all the page assets have finished loading.  

/* the differences:
######################
$(function () {}):
--------------------
- This is a shorthand for $(document).ready(function () {}).
- It runs the provided function as soon as the DOM is fully loaded.
- It doesn't wait for external resources like images to be completely loaded.

$(function () {
    // Your code here
});
######################
$(window).on("load", function () {}):

- This waits for the entire page, including all images
  and other external resources, to be fully loaded.
- It ensures that the function is executed only after all assets (images, stylesheets, etc.) have been downloaded.

$(window).on("load", function () {
    // Your code here
});
######################
*/
//#endregion

$(function () {

    // ^ === Feedback section using owl-carsouel.js === /////
    //#region Feedback section using owl-carsouel.js
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

    //#endregion
    // ^ === Numbers section - Counter-up using counterup.js === /////
    //#region Numbers section - Counter-up using counterup.js
    $(".numbers .counter").countUp({
        delay: 10,
        time: 1500,
    });

    //#endregion


});

$(window).on("load", function () {
    // Preloader
    $(".loading").addClass("loading-end").fadeOut(5000);

    // ^ === Services section - smooth rearrangement using isotope.js  === /////
    //#region Services section - smooth rearrangement using isotope.js
    $("#services .row").isotope({
        // options
        itemSelector: ".isoItem",
    });

    //#endregion

    // ^ === Navbar section - Change the Navbar style based on scrolling === /////
    //#region Change the Navbar style based on scrolling
    window.addEventListener("scroll", function () {
        var scroll = window.scrollY;
        var h_hight = $("#home").outerHeight();
        // console.log("scroll: " + scroll);
        // console.log("h_hight: " + h_hight);

        if (scroll > h_hight) {
            document.getElementById("navbar").classList.add("nav-scroll");
        } else {
            document.getElementById("navbar").classList.remove("nav-scroll");

        }
    });
    //#endregion

});


// ! NAVBAR SECTION

// ^ === Navbar section - Collapse nav-list when nav-link is clicked using vanilla js === /////
//#region Navbar section - Collapse nav-list when nav-link is clicked using vanilla js
function toggleNavbar() {
    var droplist = document.getElementById('navbarNavDropdown');
    droplist.classList.toggle('show');

    if (droplist.classList.contains('show')) {
        // Add an event listener to close the navbar only when interacting with elements inside it
        document.addEventListener('click', function (event) {

            var links = document.querySelectorAll('#navbarNavDropdown .nav-link');
            // console.log(navbar);

            links.forEach(element => {
                var isClickInsideNavbar = element.contains(event.target);
                console.log(isClickInsideNavbar);
                if (isClickInsideNavbar === true) {
                    console.log("trueeeeee");
                    droplist.classList.remove('show');
                    // return;
                }

            });

        });
    };
};
//#endregion

// ! HOME SECTION

// ^ === Home section - Image parallax effect using vanilla js === /////
//#region Home section - Image parallax effect using vanilla js
document.addEventListener('scroll', function () {
    let scrollTop = window.scrollY;
    let speed = 0.3; // Adjust the speed as needed

    document.querySelector('.parallax-section').style.transform = `translateY(${scrollTop * speed}px)`;
});
//#endregion

// ^ === Home section - Typing effect using Typed.js === /////
//#region Home section - Typing effect using Typed.js
var typed = new Typed('.element', {
    strings: ['Jerry Daniels', 'Designer', 'Developer', 'Freelancer'],
    // stringsElement: null,
    // time before typing starts
    // startDelay: 1200,
    // typing speed
    typeSpeed: 100,
    // time before backspacing
    // backDelay: 30,
    // backspacing speed
    backSpeed: 50,
    // loop
    loop: true,
    // false = infinite
    // loopCount: 10,
    // show cursor
    // showCursor: true,
    // character for cursor
    cursorChar: " |",
    // shuffle: true,
    // smartBackspace: false,
    // attribute to type (null == text)
    // attr: null,
    // either html or text
    // contentType: 'html',
    // call when done callback function
    callback: function () { },
    // starting callback function before each string
    preStringTyped: function () { },
    //callback for every typed string
    onStringTyped: function () { },
    // callback for reset
    resetCallback: function () { }
});
//#endregion


// ! PORTFOLIO SECTION

// ^ === Portfolio section - Links copy event using vanilla js === /////
//#region Portfolio section - Links copy event using vanilla js
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
//#endregion

// ^ === Portfolio section - Popup images using vanilla js === /////
//#region Portfolio section - Popup images using vanilla js
//#region pop1
function openPopup1() {
    // Add the 'blur' class to the body
    // document.body.classList.add('blur');
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    // Add the 'no-scroll' class to the body to disable scrolling
    document.body.classList.add('no-scroll');
    // Display the popup
    document.getElementById('popup1').style.display = 'block';
}

function closePopup1() {
    // Remove the 'blur' class from the body
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    // Remove the 'no-scroll' class from the body to enable scrolling
    document.body.classList.remove('no-scroll');
    // Hide the popup
    document.getElementById('popup1').style.display = 'none';
}
//#endregion
// ----------------
//#region pop2
function openPopup2() {
    // Add the 'blur' class to the body
    // document.body.classList.add('blur');
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    // Add the 'no-scroll' class to the body to disable scrolling
    document.body.classList.add('no-scroll');
    // Display the popup
    document.getElementById('popup2').style.display = 'block';
}
function closePopup2() {
    // Remove the 'blur' class from the body
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    // Remove the 'no-scroll' class from the body to enable scrolling
    document.body.classList.remove('no-scroll');
    // Hide the popup
    document.getElementById('popup2').style.display = 'none';
}
//#endregion
// ----------------
//#region pop3
function openPopup3() {
    // Add the 'blur' class to the body
    // document.body.classList.add('blur');
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    // Add the 'no-scroll' class to the body to disable scrolling
    document.body.classList.add('no-scroll');
    // Display the popup
    document.getElementById('popup3').style.display = 'block';
}
function closePopup3() {
    // Remove the 'blur' class from the body
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    // Remove the 'no-scroll' class from the body to enable scrolling
    document.body.classList.remove('no-scroll');
    // Hide the popup
    document.getElementById('popup3').style.display = 'none';
}
//#endregion
// ----------------
//#region pop4
function openPopup4() {
    // Add the 'blur' class to the body
    // document.body.classList.add('blur');
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    // Add the 'no-scroll' class to the body to disable scrolling
    document.body.classList.add('no-scroll');
    // Display the popup
    document.getElementById('popup4').style.display = 'block';
}
function closePopup4() {
    // Remove the 'blur' class from the body
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    // Remove the 'no-scroll' class from the body to enable scrolling
    document.body.classList.remove('no-scroll');
    // Hide the popup
    document.getElementById('popup4').style.display = 'none';
}
//#endregion
// ----------------
//#region pop5
function openPopup5() {
    // Add the 'blur' class to the body
    // document.body.classList.add('blur');
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    // Add the 'no-scroll' class to the body to disable scrolling
    document.body.classList.add('no-scroll');
    // Display the popup
    document.getElementById('popup5').style.display = 'block';
}
function closePopup5() {
    // Remove the 'blur' class from the body
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    // Remove the 'no-scroll' class from the body to enable scrolling
    document.body.classList.remove('no-scroll');
    // Hide the popup
    document.getElementById('popup5').style.display = 'none';
}
//#endregion
// ----------------
//#region pop6
function openPopup6() {
    // Add the 'blur' class to the body
    // document.body.classList.add('blur');
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    // Add the 'no-scroll' class to the body to disable scrolling
    document.body.classList.add('no-scroll');
    // Display the popup
    document.getElementById('popup6').style.display = 'block';
}
function closePopup6() {
    // Remove the 'blur' class from the body
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    // Remove the 'no-scroll' class from the body to enable scrolling
    document.body.classList.remove('no-scroll');
    // Hide the popup
    document.getElementById('popup6').style.display = 'none';
}
//#endregion

//#endregion

// * === Portfolio section - Filtering using #[     vanilla js       ]# === /////
//#region Portfolio Filtering using vanilla js



// function filterItems(category) {
//     // get all items
//     var items = document.querySelectorAll('#gallery .items');

//     // Display only the selected category  
//     items.forEach(item => {
//         console.log(item);

//         if (category === 'all' || item.classList.contains(category)) {
//             item.style.display = 'block';
//         } else {
//             item.style.display = 'none';
//         }
//     });

//     $(".filtering").on("click", "span", function () {
//         $(this).addClass("active").siblings().removeClass("active");
//     });
// };


//#endregion

// * === Portfolio section - Filtering using #[     isotope.js      ]#  === /////
//#region Portfolio Filtering using isotope.js

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

//#endregion