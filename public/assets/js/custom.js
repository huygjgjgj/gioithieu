(function($) {
  "use strict";

    /*=================== Search Form ===================*/
    $(".menu-search").on('click', function(e){
        $('.search-form').addClass('open');
        e.stopPropagation();
        e.preventDefault();
    });

    $(".search-close").on('click', function(e){
        $('.search-form').removeClass('open');
        e.stopPropagation();
        e.preventDefault();
    });

    /*=================== Style switcher ===================*/

    $(".switcher-toggle").on('click', function(e){
        $(".style-switcher").toggleClass('open');
    });

    $('.color-scheme').on('click', function() {
        $('.color-scheme').removeClass('active');
        $(this).addClass('active');
    });

    $(".color-scheme-main").on('click', function(e){
      $("body").addClass("scheme-main").removeClass("scheme-blue scheme-s-blue scheme-green");
    });

    $(".color-scheme-blue").on('click', function(e){
      $("body").addClass("scheme-blue").removeClass("scheme-main scheme-s-blue scheme-green");
    });

    $(".color-scheme-s-blue").on('click', function(e){
      $("body").addClass("scheme-s-blue").removeClass("scheme-main scheme-blue scheme-green");
    });

    $(".color-scheme-green").on('click', function(e){
      $("body").addClass("scheme-green").removeClass("scheme-main scheme-blue scheme-s-blue");
    });

    /*=================== Gallery Lightbox ===================*/
    $('a[data-rel^=project]').lightcase({
        transition: 'elastic',
        fullScreenModeForMobile: true,
        speedIn : 500,
        swipe: true,
    });

    /*=================== On Scroll Animation ===================*/
    var wow = new WOW({
      mobile:  false,
      offset:  100,
    });
    wow.init();

    /*=================== Othe page preview ===================*/
    $(".show-img").on('click', function(e){
      $(".other-page-preview").addClass('open');
      $(".other-page-preview img.e-lazy").lazyload({
        container: $("#other-id1"),
        effect: 'fadeIn',
        effectspeed: 2000,
        threshold: 400,
        load:function(){
            var $mescontainer2 = $('.mesonary-wrapper2');
            $mescontainer2.masonry({
            }).imagesLoaded(function() {  });
        }
      });
    });

    $(".close-show-img").on('click', function(e){
      $(".other-page-preview").removeClass('open');
    });

    /*=================== One Page Scrolling ===================*/
      $(document).on('click', 'a.page-scroll', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
          }, 1500, 'easeInOutCirc');
          event.preventDefault();
      });

    /*=================== Fullscreen scrolling ===================*/
    $('#sec-scroll').fullpage({
      navigation: true,
      navigationPosition: 'right',
      sectionSelector: '.sec-scroll-sec',
      scrollBar: true,
      fitToSection: false,
      scrollOverflow: true,
      paddingTop: '8em',
      paddingBottom: '2em',
      easing: 'easeInQuart',
      responsiveWidth: 768,
    });

    /*=================== Scroll Top ===================*/
    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 900) {
       $('.scroll-top').fadeIn(600);
         } else {
      	$('.scroll-top').fadeOut(600);
        }
      }); 
      $('.scroll-top').on("click", function() {
        $("html,body").animate({ scrollTop: 0 }, 1500);
        return false;
    });

    /*=================== Counter ===================*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    /*=================== Sidemenu toggle ===================*/
    $('.sidemenu-toggle').on('click', function(){
        $('.header').toggleClass("sidemenu-open");
    })

    /*=================== Team Slide ===================*/
    var owl = $('.owl-carousel.team-slide');
    owl.owlCarousel({
      margin: 30,
      nav: true,
      loop: true,
	  autoplay: true,
      loop: true,
      navText: [
          "<i class='icofont icofont-rounded-left'></i>",
          "<i class='icofont icofont-rounded-right'></i>"],
      responsive: {
        0: {
          items: 1
        },
        640: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });

    /*=================== Client Slide ===================*/
    var owl = $('.owl-carousel.client-slide');
    owl.owlCarousel({
      margin: 0,
      nav: true,
      loop: true,
      navText: [
          "<i class='icofont icofont-rounded-left'></i>",
          "<i class='icofont icofont-rounded-right'></i>"],
      responsive: {
        0: {
          items: 1
        },
        640: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    })

    /*=================== Photography Slide ===================*/
    var photographySlide = new Swiper('.photography-slide', {
        speed: 400,
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
            // when window width is <= 320px
            680: {
              slidesPerView: 1
            }
        }
    });   

    /*=================== Client logo Slide ===================*/
    var owl = $('.owl-carousel.clients-logo');
    owl.owlCarousel({
      margin: 0,
      nav: true,
      dots: true,
      loop: true,
      autoplay: true,
      mouseDrag: true,
      autoplayTimeout: 2500,
      navText: [
          "<i class='icofont icofont-rounded-left'></i>",
          "<i class='icofont icofont-rounded-right'></i>"],
      responsive: {
        0:{
          items: 1
        },
        480: {
          items: 3
        },
        768: {
          items: 5
        }
      }
    })

    /*=================== Project Slide ===================*/
    var owl = $('.owl-carousel.porject-single-slide');
    owl.owlCarousel({
      margin: 0,
      items: 1,
      nav: false,
      loop: true,
      dot: true,
      autoplay: true,
    })

    var owl = $('.owl-carousel.porject-single-thumb-slide');
    owl.owlCarousel({
      margin: 0,
      items: 1,
      nav: false,
      loop: true,
      dot: false,
      autoplay: true,
      thumbs: true,
      thumbsPrerendered: true
    })

    /*=================== Testimonial Slide ===================*/
    var owl = $('.owl-carousel.testimonial-slide');
    owl.owlCarousel({
      margin: 20,
      nav: true,
      loop: true,
      center: true,
      autoplay: true,
      navText: [
          "<i class='icofont icofont-rounded-left'></i>",
          "<i class='icofont icofont-rounded-right'></i>"],
      responsive: {
        0: {
          items: 1
        },
        640: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });

    var owl = $('.owl-carousel.testimonial-slide-single');
    owl.owlCarousel({
      margin: 0,
      nav: true,
      autoplay: true,
      loop: true,
      navText: [
          "<i class='icofont icofont-rounded-left'></i>",
          "<i class='icofont icofont-rounded-right'></i>"],
      responsive: {
        0: {
          items: 1
        },
        640: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });

    var owl = $('.owl-carousel.testimonial-slide-single-style-2');
    owl.owlCarousel({
      margin: 0,
      nav: true,
      loop: true,
      autoplay: true,
      dots: true,
      navText: [
          "<i class='icofont icofont-thin-left'></i>",
          "<i class='icofont icofont-thin-right'></i>"],
      responsive: {
        0: {
          items: 1,
          margin:30,
        },
        640: {
          items: 1,
          margin:30,
        },
        990: {
          items: 1,
        }
      }
    });

    var testimonialVertical = new Swiper('.testimonial-vertical-slide', {
        speed: 800,
        autoplay: 444000,
        effect: 'coverflow',
        direction: 'vertical',
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        coverflow: {
            rotate: 0,
            stretch: 118,
            depth: 30,
            modifier: 3,
            slideShadows : false
        }
    });

    /*=================== Post Slide ===================*/
    var owl = $('.owl-carousel.recent-post-slide');
    owl.owlCarousel({
      margin: 30,
      nav: true,
      loop: true,
      navText: [
          "<i class='icofont icofont-rounded-left'></i>",
          "<i class='icofont icofont-rounded-right'></i>"],
      responsive: {
        0: {
          items: 1
        },
        640: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    })

    /*=================== Blog Slider ===================*/
    var blogSlider = new Swiper('.blog-slider-container.blog-slider-main', {
      slidesPerView: 1,
      speed: 600,
      loop: true,
      loopedSlides: 5,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
    }); 

    var blogSliderSingle = new Swiper('.blog-slider', {
      slidesPerView: 1,
      speed: 600,
      loop: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
    }); 

    var blogThumb = new Swiper('.blog-slider-container.blog-slider-thumb', {
      slidesPerView: 5,
      touchRatio: 0.2,
      speed: 600,
      loop:true,
      loopedSlides: 5,
      slideToClickedSlide: true,
      centeredSlides: true,
    }); 

    blogSlider.params.control = blogThumb;
    blogThumb.params.control = blogSlider;

    /*=================== App Slider ===================*/
    var appSlide = new Swiper('.app-slide', {
        speed: 400,
        slidesPerView: 3,
        effect: 'coverflow',
        autoplay: 1500,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        coverflow: {
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2,
            slideShadows : false,
        },
        breakpoints: {
            992: {
              slidesPerView: 2
            },
            560: {
              slidesPerView: 1
            }
        }
    }); 

    var appSlide2 = new Swiper('.app-slide-2', {
        speed: 400,
        slidesPerView: 4,
        effect: 'coverflow',
        autoplay: 2500,
        spaceBetween: 0,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        centeredSlides: true,
        loop: true,
        coverflow: {
            rotate: 0,
            stretch: 10,
            depth: 100,
            modifier: 2,
            slideShadows : false,
        },
        breakpoints: {
            992: {
              slidesPerView: 3,
            },
            560: {
              slidesPerView: 1,
              effect: 'slide',
            }
        }
    }); 
    var owl = $('.owl-carousel.app-slide-3');
    owl.owlCarousel({
      margin: 30,
      nav: true,
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplaySpeed: 1000,
      dots: true,
      navText: [
          "<i class='icofont icofont-thin-left'></i>",
          "<i class='icofont icofont-thin-right'></i>"],
    })

    /*=================== Portfolio Slider ===================*/
      var portfolioSlide1 = new Swiper('.portfolio-slider-1', {
          speed: 600,
          slidesPerView: 1,
          effect: 'coverflow',
          autoplay: 4000,
          spaceBetween: 0,
          centeredSlides: true,
          loop: true,
          nextButton: ".swiper-button-next",
          prevButton: ".swiper-button-prev",
          coverflow: {
              rotate: 0,
              stretch: 0,
              depth: 125,
              modifier: 2,
              slideShadows : false,
          },
      }); 

      var portfolioSlide2 = new Swiper('.portfolio-slider-2.gallery-top', {
          speed: 800,
          slidesPerView: 1,
          loopedSlides: 5,
          effect: 'coverflow',
          autoplay: 4000,
          spaceBetween: 0,
          centeredSlides: true,
          loop: true,
          nextButton: ".swiper-button-next",
          prevButton: ".swiper-button-prev",
          coverflow: {
              rotate: 0,
              stretch: 0,
              depth: 270,
              modifier: 2,
              slideShadows : false,
          },
      });

      var portfolioSlidethumb1 = new Swiper('.portfolio-slider-2.gallery-thumbs', {
        centeredSlides: true,
        loop: true,
        slidesPerView: 5,
        loopedSlides: 5,
        speed: 800,
        slideToClickedSlide: true,
      });
      portfolioSlide2.params.control = portfolioSlidethumb1;
      portfolioSlidethumb1.params.control = portfolioSlide2

      var portfolioSlide3 = new Swiper('.portfolio-slider-3.gallery-top', {
          speed: 800,
          slidesPerView: 1,
          loopedSlides: 5,
          autoplay: 4000,
          spaceBetween: 0,
          centeredSlides: true,
          loop: true,
          nextButton: ".swiper-button-next",
          prevButton: ".swiper-button-prev",
      });

      var portfolioSlidethumb2 = new Swiper('.portfolio-slider-3.gallery-thumbs', {
        centeredSlides: true,
        loop: true,
        slidesPerView: 5,
        loopedSlides: 5,
        speed: 800,
        slideToClickedSlide: true,
      });
      portfolioSlide3.params.control = portfolioSlidethumb2;
      portfolioSlidethumb2.params.control = portfolioSlide3

      /*=================== Food Menu Slide ===================*/
      var owl = $('.owl-carousel.food-menu-slide');
      owl.owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        center: true,
        autoplay: true,
        navText: [
            "<i class='icofont icofont-thin-left'></i>",
            "<i class='icofont icofont-thin-right'></i>"],
        responsive: {
          0: {
            items: 1
          },
          640: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
      });

    /*=================== Sticky Menu ===================*/
    if($('header.header').length > 0){
      var myNavBar = {

          flagAdd: true,

          elements: [],

          init: function(elements) {
              this.elements = elements;
          },

          add: function() {
              if (this.flagAdd) {
                  for (var i = 0; i < this.elements.length; i++) {
                      document.getElementById(this.elements[i]).className += " fixed-top";
                  }
                  this.flagAdd = false;
              }
          },

          remove: function() {
              for (var i = 0; i < this.elements.length; i++) {
                  document.getElementById(this.elements[i]).className =
                      document.getElementById(this.elements[i]).className.replace(/(?:^|\s)fixed-top(?!\S)/g, '');
              }
              this.flagAdd = true;
          }

      };
      /**
       * Init the object. Pass the object the array of elements
       * that we want to change when the scroll goes down
       */
      myNavBar.init([
          "fixed"
      ]);

      /**
       * Function that manage the direction
       * of the scroll
       */
      function offSetManager() {

          var yOffset = 0;
          var currYOffSet = window.pageYOffset;

          if (yOffset < currYOffSet) {
              myNavBar.add();
          } else if (currYOffSet == yOffset) {
              myNavBar.remove();
          }
      }
      /**
       * bind to the document scroll detection
       */
      window.onscroll = function(e) {
          offSetManager();
      }

      /**
       * We have to do a first detectation of offset because the page
       * could be load with scroll down set.
       */
      offSetManager();
    }

    /*=================== Scroll To Next Section ===================*/
    $("a.scroll-down").on('click', function() {
      var cls = $(this).closest("section").next().offset().top;
      $("html, body").animate({scrollTop: cls}, 1000, 'easeOutSine');
    });


    /*=================== Parallax ===================*/
      if ($('.parallax').length > 0) {
        $(window).stellar({
              horizontalScrolling: false,
              verticalScrolling: true,
              horizontalOffset: 0,
              verticalOffset: 0,
          });
      }

    /*=================== Countdown ===================*/
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<div class="countdown-container"><div class="countdown-box day"><div class="number">%-D</div><span>Day%!d</span></div>' + '<div class="countdown-box hour"><div class="number">%H</div><span>Hours</span></div>' + '<div class="countdown-box min"><div class="number">%M</div><span>Minutes</span></div>' + '<div class="countdown-box sec"><div class="number">%S</div><span>Seconds</span></div></div>'));
        });
    });

    /*=================== Masonry ===================*/
    var $mescontainer = $('.mesonary-wrapper');
    $mescontainer.imagesLoaded(function(){
      $mescontainer.masonry({
        columnWidth: '.grid-sizer',
        itemSelector: '.mesonary-item',
        percentPosition: true,
      });   
    });

    $mescontainer.addClass("zoom");

    /*=================== Price Range Selector ===================*/
    $('.nstSlider').nstSlider({
      "crossable_handles": false,
      "left_grip_selector": ".leftGrip",
      "right_grip_selector": ".rightGrip",
      "value_bar_selector": ".bar",
      "value_changed_callback": function(cause, leftValue, rightValue) {
          var $container = $(this).parent();
          $container.find('.leftLabel').text(leftValue);
          $container.find('.rightLabel').text(rightValue);
      }
    });

    /*=================== Page Loaded Animation ===================*/
    $(".p-load-animation").animsition({
      inClass: 'fade-in',
      outClass: 'fade-out',
      linkElement: '.p-load-link',
      loading: true,
      loadingClass: 'animsition-preloader',
      loadingParentElement: 'html',
      loadingInner: '<div class="loading-inner"></div>'
    });

    /*=================== infinitescroll ===================*/ 
    var infinityselctor = $('.infinityselctor');
    infinityselctor.infinitescroll({
      navSelector: ".infinity-links",
      nextSelector: ".infinity-links a:first",
      itemSelector: ".infinity-item",
      animate: true,
      loading: {
        msgText: "Loading more posts...",
        finishedMsg: "Sorry, no more posts"
      },
    });

    var infinityselctorMesonary = $('.infinityselctor-mesonary');
    infinityselctorMesonary.infinitescroll({
      navSelector: ".infinity-links",
      nextSelector: ".infinity-links a:first",
      itemSelector: ".infinity-mesonary-item",
      animate: true,
      loading: {
        msgText: "Loading more posts...",
        finishedMsg: "Sorry, no more posts"
      },
      },
      function(new_elts) {
        var elts = $(new_elts).css('opacity', 0);
        elts.animate({opacity: 1});
        infinityselctorMesonary.masonry('appended', elts);
      });
    
    /*=================== LazyLoad ===================*/  
      $('.lazy').lazyload({
        attribute: "data-src",
        effect: "fadeIn",
        effectTime: 2000,
        threshold : 400,
      });


    /*=================== Gallery Filter ===================*/
    if($('div#filter-gallery').length > 0){
    var Shuffle = window.shuffle;

    var Demo = function (element) {
      this.element = element;

      // Log out events.
      this.addShuffleEventListeners();

      this.shuffle = new Shuffle(element, {
        itemSelector: '.filtr-item',
        sizer: element.querySelector('.filtr-item'),
        speed: 600, // Transition/animation speed (milliseconds).
        easing: 'cubic-bezier(0.35, 1.04, 0.51, 1.03)', // CSS easing function to use.
      });

      this._activeFilters = [];

      this.addFilterButtons();
      this.addSorting();
      this.addSearchFilter();

      this.mode = 'exclusive';
    };

    Demo.prototype.toArray = function (arrayLike) {
      return Array.prototype.slice.call(arrayLike);
    };

    Demo.prototype.toggleMode = function () {
      if (this.mode === 'additive') {
        this.mode = 'exclusive';
      } else {
        this.mode = 'additive';
      }
    };

    /**
     * Shuffle uses the CustomEvent constructor to dispatch events. You can listen
     * for them like you normally would (with jQuery for example). The extra event
     * data is in the `detail` property.
     */
    Demo.prototype.addShuffleEventListeners = function () {
      var handler = function (event) {};

      this.element.addEventListener(Shuffle.EventType.LAYOUT, handler, false);
      this.element.addEventListener(Shuffle.EventType.REMOVED, handler, false);
    };

    Demo.prototype.addFilterButtons = function () {
      var options = document.querySelector('.filter-btn');

      if (!options) {
        return;
      }

      var filterButtons = this.toArray(
        options.children
      );

      filterButtons.forEach(function (button) {
        button.addEventListener('click', this._handleFilterClick.bind(this), false);
      }, this);
    };

    Demo.prototype._handleFilterClick = function (evt) {
      var btn = evt.currentTarget;
      var isActive = btn.classList.contains('active');
      var btnGroup = btn.getAttribute('data-group');

      // You don't need _both_ of these modes. This is only for the demo.

      // For this custom 'additive' mode in the demo, clicking on filter buttons
      // doesn't remove any other filters.
      if (this.mode === 'additive') {
        // If this button is already active, remove it from the list of filters.
        if (isActive) {
          this._activeFilters.splice(this._activeFilters.indexOf(btnGroup));
        } else {
          this._activeFilters.push(btnGroup);
        }

        btn.classList.toggle('active');

        // Filter elements
        this.shuffle.filter(this._activeFilters);

      // 'exclusive' mode lets only one filter button be active at a time.
      } else {
        this._removeActiveClassFromChildren(btn.parentNode);

        var filterGroup;
        if (isActive) {
          btn.classList.remove('active');
          filterGroup = Shuffle.ALL_ITEMS;
        } else {
          btn.classList.add('active');
          filterGroup = btnGroup;
        }

        this.shuffle.filter(filterGroup);
      }
    };

    Demo.prototype._removeActiveClassFromChildren = function (parent) {
      var children = parent.children;
      for (var i = children.length - 1; i >= 0; i--) {
        children[i].classList.remove('active');
      }
    };

    Demo.prototype.addSorting = function () {
      var menu = document.querySelector('.sort-options');

      if (!menu) {
        return;
      }

      menu.addEventListener('change', this._handleSortChange.bind(this));
    };

    Demo.prototype._handleSortChange = function (evt) {
      var value = evt.target.value;
      var options = {};

      function sortByDate(element) {
        return element.getAttribute('data-created');
      }

      function sortByTitle(element) {
        return element.getAttribute('data-title').toLowerCase();
      }

      if (value === 'date-created') {
        options = {
          reverse: true,
          by: sortByDate,
        };
      } else if (value === 'title') {
        options = {
          by: sortByTitle,
        };
      }

      this.shuffle.sort(options);
    };

    // Advanced filtering
    Demo.prototype.addSearchFilter = function () {
      var searchInput = document.querySelector('.js-shuffle-search');

      if (!searchInput) {
        return;
      }

      searchInput.addEventListener('keyup', this._handleSearchKeyup.bind(this));
    };

    /**
     * Filter the shuffle instance by items with a title that matches the search input.
     * @param {Event} evt Event object.
     */
    Demo.prototype._handleSearchKeyup = function (evt) {
      var searchText = evt.target.value.toLowerCase();

      this.shuffle.filter(function (element, shuffle) {

        // If there is a current filter applied, ignore elements that don't match it.
        if (shuffle.group !== Shuffle.ALL_ITEMS) {
          // Get the item's groups.
          var groups = JSON.parse(element.getAttribute('data-groups'));
          var isElementInCurrentGroup = groups.indexOf(shuffle.group) !== -1;

          // Only search elements in the current group
          if (!isElementInCurrentGroup) {
            return false;
          }
        }

        var titleElement = element.querySelector('.picture-item__title');
        var titleText = titleElement.textContent.toLowerCase().trim();

        return titleText.indexOf(searchText) !== -1;
      });
    };

    document.addEventListener('DOMContentLoaded', function () {
      window.demo = new Demo(document.getElementById('filter-gallery'));
    });
  }

})($);

