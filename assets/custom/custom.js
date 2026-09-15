$(document).ready(function() {

    $(".clickFade ul").hide();
    $(".clickFade").click(function() {
        $(this).children("ul").stop(true, true).fadeToggle("fast"),
            $(this).toggleClass("dropdown-active");
    });

    // Start Winter Infotech 18-12-2020
    $('.winter-review').each(function() {
        if (typeof($(this).children('span').data('review')) !== "undefined") {
            $(this).parent().find('.winter-count').text($(this).children('span').attr('data-review'));
        }
    });
    // End Winter Infotech 18-12-2020
    /* loader */
    var o = $('#page-preloader');
    if (o.length > 0) {
        $(window).on('load', function() {
            $('#page-preloader').removeClass('visible');
        });
    }

    // sticky add to cart in product page
    $(window).scroll(function() {
        if ($(this).scrollTop() > 900) {
            $('.sticky-cart-product').fadeIn();
        } else {
            $('.sticky-cart-product').fadeOut();
        }
    });

    // search
    $(".first").click(function() {
        $(".sec").addClass("newadd");
    });
    $(".sec").click(function() {
        $(".first").addClass("newrem");
        $(this).removeClass("newadd");
    });

    // Category page grid to list view Js
    $(document).on('click', '#gridProduct', function(event) {
        event.preventDefault(); // Prevents the default behavior (page reload) if needed
        $("#gridProduct").addClass("active");
        $("#listProduct").removeClass("active");
        $(".productList").addClass("productGrid");
        $(".productGrid").removeClass("productList");
    });

    $(document).on('click', '#listProduct', function(event) {
        event.preventDefault(); // Prevents the default behavior (page reload) if needed
        $("#listProduct").addClass("active");
        $("#gridProduct").removeClass("active");
        $(".productGrid").addClass("productList");
        $(".productList").removeClass("productGrid");
    });

    /* sticky header */
    if ($(window).width() >= 800) {
        var header = document.querySelector('.header');
        onScroll = () => {
            var scrolledPage = Math.round(window.pageYOffset);
            if (scrolledPage > 400) {
                $('.header-top').addClass('fixed fadeInDown animated mycustom-container');
                document.getElementById("header_placeholder").style.display = "block";
            } else {
                $('.header-top').removeClass('fixed fadeInDown animated mycustom-container');
                document.getElementById("header_placeholder").style.display = "none";
            }
        }
        document.addEventListener('scroll', onScroll);
    } else {
        var header = document.querySelector('.header');
        onScroll = () => {
            var scrolledPage = Math.round(window.pageYOffset);
            if (scrolledPage > 120) {
                $('.header-top').addClass('fixed fadeInDown animated mycustom-container');
                document.getElementById("header_placeholder").style.display = "block";
            } else {
                $('.header-top').removeClass('fixed fadeInDown animated mycustom-container');
                document.getElementById("header_placeholder").style.display = "none";
            }
        }
        document.addEventListener('scroll', onScroll);
    }

    if ($(window).width() <= 800) {
        
        $('.mygift').appendTo('.user-down');
        $('.theme_automotive .myquick-search').appendTo('.fashion-search');

    }
});

// Compare product js
$(document).ready(function() {
    $('#comparecontent').fadeOut('slow');
    $(".card-figcaption-body .compare").click(function() {
        $('#comparecontent').fadeIn('slow');
        // $("#comparecontent").removeClass("d-none");
        setTimeout(function() {
            $('#comparecontent').fadeOut('slow');
            // $("#comparecontent").addClass("d-none");
        }, 2000);
    });
});
$(document).ready(function() {
    $("body").on("click", ".wb-compare", function() {
        var pro_id = $(this).data("compare-id");
        var oldUrl = $(".navUser-item .navUser-item--compare").attr('href');
        const compareId = $(this).attr("data-compare-id");
        console.log($(this).parent())
        if ($(this).parent().hasClass('is-active')) {
            $("body .compare-" + compareId).removeClass("is-active");
            $('#product-remove-popup').fadeIn().delay(2500).fadeOut();
            console.log('remove')
        } else {
            $("body .compare-" + compareId).addClass("is-active");
            $('#product-add-popup').fadeIn().delay(2500).fadeOut();
            console.log('Add')
        }

        if ($(this).hasClass('active')) {
            $('#compare-remove-content').fadeIn('slow');
            $(this).removeClass('active');
            var newUrl = oldUrl.replace(pro_id + "/", "");
            $(".navUser-item .navUser-item--compare").attr('href', newUrl);
        } else {

            $('#compare-remove-content').fadeOut('slow');
            $(this).addClass('active');
            var url_a = $(".navUser-item .navUser-item--compare").attr('href');
            var url_b = url_a.replace(/\/$/, "") + "/" + pro_id + "/";

            $(".navUser-item .navUser-item--compare").attr('href', url_b);
            $(".navUser-item .navUser-item--compare").show();
        }
        setTimeout(function() {
            $('#compare-remove-content').fadeOut('slow');
        }, 2000);
    });

    $('.titleWrapper').click(function() {
        var toggle = $(this).next('div#descwrapper');
        $(toggle).slideToggle("slow");
    });
    $('.inactive').click(function() {
        $(this).toggleClass('inactive active');
    });

});

function openSearch() {
    $('body').addClass("active-search");
    document.getElementById("search").style.height = "auto";
    $('#search').addClass("sideb");
    $('.search_query').attr('autofocus', 'autofocus').focus();
}

function closeSearch() {
    $('body').removeClass("active-search");
    document.getElementById("search").style.height = "0";
    $('#search').addClass("siden");
    $('.search_query').removeAttr('autofocus', 'autofocus').focus();
}

/* responsive menu */
function closecart() {
    document.getElementById("cart-preview-dropdown").style.transform = "translate(100%)";
}

// Dropdown in Dropdown js
$(document).ready(function() {
    $('.mycurrency .navUser-action').on("click", function(e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });

    // announcement close button js
    $("#closeButton").on("click", function(t) {
        $("#header_banner").slideToggle("slow");
    });
});

// Card quantity button
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.quantity-box').forEach(quantityBox => {
        const input = quantityBox.querySelector('.quantity-input');
        const decreaseButton = quantityBox.querySelector('.qty-decrease');
        const increaseButton = quantityBox.querySelector('.qty-increase');

        // Decrease quantity
        decreaseButton.addEventListener('click', () => {
            let currentValue = parseInt(input.value, 10);
            if (currentValue > parseInt(input.min, 10)) {
                input.value = currentValue - 1;
            }
        });

        // Increase quantity
        increaseButton.addEventListener('click', () => {
            let currentValue = parseInt(input.value, 10);
            input.value = currentValue + 1;
        });
    });
    // Handle Add to Cart button click
    document.querySelectorAll('.add-to-cart-button').forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();

            const form = button.closest('form');
            const qtyInput = form.querySelector('.quantity-input');
            const qty = qtyInput ? qtyInput.value : 1;
            const productId = form.querySelector('input[name="product_id"]').value;
            fetch('/cart.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    action: 'add',
                    product_id: productId,
                    qty: qty
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(() => {
                window.location.href = '/cart.php';
            })
            .catch(error => {
                console.error('Error adding to cart:', error);
                alert('Something went wrong. Please try again.');
            });
        });
    });
})

// more menu js
$(document).ready(function() {
$('#pt_vegamenu').click(function() {
    $('.navPages-list.collapse').toggleClass('open-is');
});
// default add class in 
if ($(window).width() >= 1200){
    $(document).ready(function() {
        // Check if we're on the homepage
        if (window.location.pathname === '/') {
            $('.theme_automotive .navPages-list.collapse').addClass('open-is');
            $(window).scroll(function() {
                const element = $('.theme_automotive .navPages-list.collapse');
                if ($(this).scrollTop() > 400) {  // Adjust scroll threshold as needed
                    element.removeClass('open-is');
                } else {
                    element.addClass('open-is');
                }
            });
        }
    });
}
if ($(window).width() >= 1410){
     var count_block = $('.allleftmenu .navPages-list .navPages-item').length;
     var number_blocks = 8;
     if(count_block < number_blocks){
          return false; 
     } else {
          
          $('.allleftmenu .navPages-list .navPages-item').each(function(i,n){
                if(i == number_blocks) {
                     $('.allleftmenu .navPages-list').append('<li class="view_more"><a class="dropdown-item dropdown-plus"><span><svg enable-background="new 0 0 50 50" height="15px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="50px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect fill="none" height="50" width="50"/><line fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" x1="9" x2="41" y1="25" y2="25"/><line fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" x1="25" x2="25" y1="9" y2="41"/></svg></span> More Categories</a><a class="dropdown-item dropdown-minus"><span><svg enable-background="new 0 0 50 50" height="15px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="50px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect fill="none" height="50" width="50"/><line fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" x1="9" x2="41" y1="25" y2="25"/></svg></span> Less Categories</a></li>');
                }
                if(i> number_blocks) {
                     $(this).addClass('wr_hide_menu');
                }
          })
          $('.wr_hide_menu').hide();
          $('.view_more').click(function() {
                $(this).toggleClass('active');
                $('.wr_hide_menu').slideToggle();
          });
     }
}

if (($(document).width() <= 1409)){
     var count_block = $('.allleftmenu .navPages-list .navPages-item').length;
     var number_blocks = 7;
     if(count_block < number_blocks){
          return false; 
     } else {
          
          $('.allleftmenu .navPages-list .navPages-item').each(function(i,n){
                if(i == number_blocks) {
                     $('.allleftmenu .navPages-list').append('<li class="view_more"><a class="dropdown-item dropdown-plus"><span><svg enable-background="new 0 0 50 50" height="15px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="50px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect fill="none" height="50" width="50"/><line fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" x1="9" x2="41" y1="25" y2="25"/><line fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" x1="25" x2="25" y1="9" y2="41"/></svg></span> More Categories</a><a class="dropdown-item dropdown-minus"><span><svg enable-background="new 0 0 50 50" height="15px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="50px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect fill="none" height="50" width="50"/><line fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" x1="9" x2="41" y1="25" y2="25"/></svg></span> Less Categories</a></li>');
                }
                if(i> number_blocks) {
                     $(this).addClass('wr_hide_menu');
                }
          })
          $('.wr_hide_menu').hide();
          $('.view_more').click(function() {
                $(this).toggleClass('active');
                $('.wr_hide_menu').slideToggle();
          });
     }
}
});

// Scroll down add class Js
function handleScroll() {
    const sections = document.querySelectorAll('.sectionLoad');
    sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 400 && rect.top >= -rect.height) {
        section.classList.add('visible-section');
    }
    });
}
window.addEventListener('scroll', handleScroll);
handleScroll();


// Bottom to top button 
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById('backToTop');
  if (backToTopButton) {
    window.onscroll = function () {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.classList.add('show-button');
      } else {
        backToTopButton.classList.remove('show-button');
      }
    };
    backToTopButton.onclick = function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  } else {
    console.error("Back to Top button not found in the DOM.");
  }
});
