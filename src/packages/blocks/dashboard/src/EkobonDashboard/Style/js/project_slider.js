$(document).ready(function(){
    "use strict";
  
  //hidding menu elements that do not fit in menu width
  
  
  function pieChart() {
      //circle progress bar
      if (jQuery().easyPieChart) {
  
          jQuery('.chart').each(function() {
  
              var $currentChart = jQuery(this);
              var imagePos = $currentChart.offset().top;
              var topOfWindow = jQuery(window).scrollTop();
              if (imagePos < topOfWindow + 900) {
  
                  var size = $currentChart.data('size') ? $currentChart.data('size') : 270;
                  var line = $currentChart.data('line') ? $currentChart.data('line') : 20;
                  var bgcolor = $currentChart.data('bgcolor') ? $currentChart.data('bgcolor') : '#ffffff';
                  var trackcolor = $currentChart.data('trackcolor') ? $currentChart.data('trackcolor') : '#c14240';
                  var speed = $currentChart.data('speed') ? $currentChart.data('speed') : 3000;
  
  
                  $currentChart.easyPieChart({
                      barColor: trackcolor,
                      trackColor: bgcolor,
                      scaleColor: false,
                      scaleLength: false,
                      lineCap: 'butt',
                      lineWidth: line,
                      size: size,
                      rotate: 0,
                      animate: speed,
                      onStep: function(from, to, percent) {
                          jQuery(this.el).find('.percent').text(Math.round(percent));
                      }
                  });
              }
          });
      }
  }
  
  function affixSidebarInit() {
      var $affixAside = jQuery('.affix-aside');
      if ($affixAside.length) {
  
          //on stick and unstick event
          $affixAside.on('affix.bs.affix', function(e) {
              var affixWidth = $affixAside.width() - 1;
              var affixLeft = $affixAside.offset().left;
              $affixAside
                  .width(affixWidth)
                  .css("left", affixLeft);
          }).on('affix-top.bs.affix affix-bottom.bs.affix', function(e) {
              $affixAside.css({
                  "width": "",
                  "left": ""
              });
          });
  
          //counting offset
          var offsetTop = $affixAside.offset().top - jQuery('.page_header').height();
          var offsetBottom = jQuery('.page_footer').outerHeight(true) + jQuery('.page_copyright').outerHeight(true);
  
          $affixAside.affix({
              offset: {
                  top: offsetTop,
                  bottom: offsetBottom
              },
          });
  
          jQuery(window).on('resize', function() {
              $affixAside.css({
                  "width": "",
                  "left": ""
              });
  
              if ($affixAside.hasClass('affix')) {
                  //returning sidebar in top position if it is sticked because of unexpacted behavior
                  $affixAside.removeClass("affix").css("left", "").addClass("affix-top");
              }
  
              var offsetTop = jQuery('.page_topline').outerHeight(true) +
                  jQuery('.page_toplogo').outerHeight(true) +
                  jQuery('.page_breadcrumbs').outerHeight(true) +
                  jQuery('.page_header').outerHeight(true);
              var offsetBottom = jQuery('.page_footer').outerHeight(true) + jQuery('.page_copyright').outerHeight(true);
  
              $affixAside.data('bs.affix').options.offset.top = offsetTop;
              $affixAside.data('bs.affix').options.offset.bottom = offsetBottom;
  
              $affixAside.affix('checkPosition');
  
          });
  
      } //eof checking of affix sidebar existing
  }
  
  //function that initiating template plugins on document.ready event
  function documentReadyInit() {
      ////////////
      //mainmenu//
      ////////////
      if (jQuery().superfish) {
          jQuery('ul.sf-menu').superfish({
              delay: 300,
              animation: {
                  opacity: 'show'
              },
              animationOut: {
                  opacity: 'hide'
              },
              speed: 'fast',
              disableHI: false,
              cssArrows: true,
              autoArrows: true
          });
      }
  
      //toggle mobile menu
     
  
      jQuery('.mainmenu a').on('click', function() {
          if (!jQuery(this).hasClass('sf-with-ul')) {
              jQuery('.toggle_menu').toggleClass('mobile-active');
              jQuery('.page_header').toggleClass('mobile-active');
          }
      });
  
      //1 and 2/3/4th level mainmenu offscreen fix
      var MainWindowWidth = jQuery(window).width();
      jQuery(window).on('resize', function() {
          MainWindowWidth = jQuery(window).width();
      });
      //2/3/4 levels
      jQuery('.mainmenu').on('mouseover', 'ul li', function() {
          if (MainWindowWidth > 991) {
              var $this = jQuery(this);
              // checks if third level menu exist         
              var subMenuExist = $this.find('ul').length;
              if (subMenuExist > 0) {
                  var subMenuWidth = $this.find('ul').width();
                  var subMenuOffset = $this.find('ul').parent().offset().left + subMenuWidth;
                  // if sub menu is off screen, give new position
                  if ((subMenuOffset + subMenuWidth) > MainWindowWidth) {
                      var newSubMenuPosition = subMenuWidth + 0;
                      $this.find('ul').first().css({
                          left: -newSubMenuPosition,
                      });
                  } else {
                      $this.find('ul').first().css({
                          left: '100%',
                      });
                  }
              }
          }
          //1st level
      }).on('mouseover', '> li', function() {
          if (MainWindowWidth > 991) {
              var $this = jQuery(this);
              var subMenuExist = $this.find('ul').length;
              if (subMenuExist > 0) {
                  var subMenuWidth = $this.find('ul').width();
                  var subMenuOffset = $this.find('ul').parent().offset().left;
                  // if sub menu is off screen, give new position
                  if ((subMenuOffset + subMenuWidth) > MainWindowWidth) {
                      var newSubMenuPosition = MainWindowWidth - (subMenuOffset + subMenuWidth);
                      $this.find('ul').first().css({
                          left: newSubMenuPosition,
                      });
                  }
              }
          }
      });
  
      /////////////////////////////////////////
      //single page localscroll and scrollspy//
      /////////////////////////////////////////
      var navHeight = jQuery('.page_header').outerHeight(true);
      jQuery('body').scrollspy({
          target: '.mainmenu_wrapper',
          offset: navHeight
      });
      if (jQuery().localScroll) {
          jQuery('.mainmenu, #land').localScroll({
              duration: 900,
              easing: 'easeInOutQuart',
              offset: -navHeight + 10
          });
      }
  
      //toTop
      if (jQuery().UItoTop) {
          jQuery().UItoTop({
              easingType: 'easeOutQuart'
          });
      }
  
      //parallax
      if (jQuery().parallax) {
          jQuery('.parallax').parallax("50%", 0.01);
      }
  
      //prettyPhoto
      if (jQuery().prettyPhoto) {
          jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
              hook: 'data-gal',
              theme: 'facebook' /* light_rounded / dark_rounded / light_square / dark_square / facebook / pp_default*/
          });
      }
  
      ////////////////////////////////////////
      //init Twitter Bootstrap JS components//
      ////////////////////////////////////////
      //bootstrap carousel
      if (jQuery().carousel) {
          jQuery('.carousel').carousel();
      }
      //bootstrap tab - show first tab 
      jQuery('.nav-tabs').each(function() {
          jQuery(this).find('a').first().tab('show');
      });
      jQuery('.tab-content').each(function() {
          jQuery(this).find('.tab-pane').first().addClass('fade in');
      });
      //bootstrap collapse - show first tab 
      jQuery('.panel-group').each(function() {
          jQuery(this).find('a').first().filter('.collapsed').trigger('click');
      });
      //tooltip
      if (jQuery().tooltip) {
          jQuery('[data-toggle="tooltip"]').tooltip();
      }
  
      ////////////////
      //owl carousel//
      ////////////////
      if (jQuery().owlCarousel) {
          jQuery('.owl-carousel').each(function() {
              var $carousel = jQuery(this);
              var loop = $carousel.data('loop') ? $carousel.data('loop') : true;
              var margin = ($carousel.data('margin') || $carousel.data('margin') == 0) ? $carousel.data('margin') : 30;
              var nav = $carousel.data('nav') ? $carousel.data('nav') : false;
              var dots = $carousel.data('dots') ? $carousel.data('dots') : false;
              var themeClass = $carousel.data('themeclass') ? $carousel.data('themeclass') : 'owl-theme';
              var center = $carousel.data('center') ? $carousel.data('center') : false;
              var items = $carousel.data('items') ? $carousel.data('items') : 4;
              var autoplay = $carousel.data('autoplay') ? $carousel.data('autoplay') : true;
              var responsiveXs = $carousel.data('responsive-xs') ? $carousel.data('responsive-xs') : 1;
              var responsiveSm = $carousel.data('responsive-sm') ? $carousel.data('responsive-sm') : 2;
              var responsiveMd = $carousel.data('responsive-md') ? $carousel.data('responsive-md') : 3;
              var responsiveLg = $carousel.data('responsive-lg') ? $carousel.data('responsive-lg') : 4;
              var filters = $carousel.data('filters') ? $carousel.data('filters') : false;
  
              if (filters) {
                  $carousel.clone().appendTo($carousel.parent()).addClass(filters.substring(1) + '-carousel-original');
                  jQuery(filters).on('click', 'a', function(e) {
                      //processing filter link
                      e.preventDefault();
                      if (jQuery(this).hasClass('selected')) {
                          return;
                      }
                      var filterValue = jQuery(this).attr('data-filter');
                      jQuery(this).siblings().removeClass('selected active');
                      jQuery(this).addClass('selected active');
  
                      //removing old items
                      $carousel.find('.owl-item').length;
                      for (var i = $carousel.find('.owl-item').length - 1; i >= 0; i--) {
                          $carousel.trigger('remove.owl.carousel', [1]);
                      };
  
                      //adding new items
                      var $filteredItems = jQuery($carousel.next().find(' > ' + filterValue).clone());
                      $filteredItems.each(function() {
                          $carousel.trigger('add.owl.carousel', jQuery(this));
  
                      });
  
                      $carousel.trigger('refresh.owl.carousel');
                  });
  
              } //filters
  
              $carousel.owlCarousel({
                      loop: loop,
                      margin: margin,
                      nav: nav,
                      autoplay: true,
                      autoplayTimeout:2000 ,
                      dots: dots,
                      themeClass: themeClass,
                      center: center,
                      items: items,
                      responsive: {
                          0: {
                              items: responsiveXs
                          },
                          767: {
                              items: responsiveSm
                          },
                          992: {
                              items: responsiveMd
                          },
                          1200: {
                              items: responsiveLg
                          }
                      },
                  })
                  .addClass(themeClass);
              if (center) {
                  $carousel.addClass('owl-center');
              }
          });
          
  
      } //eof owl-carousel
  
  
  
  
  
      //comingsoon counter
      if (jQuery().countdown) {
          //today date plus month for demo purpose
          var demoDate = new Date();
          demoDate.setMonth(demoDate.getMonth() + 1);
          jQuery('#comingsoon-countdown').countdown({
              until: demoDate
          });
      }
  
      /////////////////////////////////////////////////
      //PHP widgets - contact form, search, MailChimp//
      /////////////////////////////////////////////////
  
      //contact form processing
      jQuery('form.contact-form').on('submit', function(e) {
          e.preventDefault();
          var $form = jQuery(this);
          jQuery($form).find('span.contact-form-respond').remove();
  
          //checking on empty values
          jQuery($form).find('[aria-required="true"], [required]').each(function(index) {
              if (!jQuery(this).val().length) {
                  jQuery(this).addClass('invalid').on('focus', function() {
                      jQuery(this).removeClass('invalid')
                  });
              }
          });
          //if one of form fields is empty - exit
          if ($form.find('[aria-required="true"], [required]').hasClass('invalid')) {
              return;
          }
  
          //sending form data to PHP server if fields are not empty
          var request = $form.serialize();
          var ajax = jQuery.post("contact-form.php", request)
              .done(function(data) {
                  jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="contact-form-respond highlight">' + data + '</span>');
                  //cleaning form
                  var $formErrors = $form.find('.form-errors');
                  if (!$formErrors.length) {
                      $form[0].reset();
                  }
              })
              .fail(function(data) {
                  jQuery($form).find('[type="submit"]').attr('disabled', false).parent().append('<span class="contact-form-respond highlight">Mail cannot be sent. You need PHP server to send mail.</span>');
              })
      });
  
  
      //search modal
      jQuery(".search_modal_button").on('click', function(e) {
          e.preventDefault();
          jQuery('#search_modal').modal('show').find('input').first().focus();
      });
      //search form processing
      jQuery('form.searchform').on('submit', function(e) {
  
          e.preventDefault();
          var $form = jQuery(this);
          var $searchModal = jQuery('#search_modal');
          $searchModal.find('div.searchform-respond').remove();
  
          //checking on empty values
          jQuery($form).find('[type="text"]').each(function(index) {
              if (!jQuery(this).val().length) {
                  jQuery(this).addClass('invalid').on('focus', function() {
                      jQuery(this).removeClass('invalid')
                  });
              }
          });
          //if one of form fields is empty - exit
          if ($form.find('[type="text"]').hasClass('invalid')) {
              return;
          }
  
          $searchModal.modal('show');
          //sending form data to PHP server if fields are not empty
          var request = $form.serialize();
          var ajax = jQuery.post("search.php", request)
              .done(function(data) {
                  $searchModal.append('<div class="searchform-respond">' + data + '</div>');
              })
              .fail(function(data) {
                  $searchModal.append('<div class="searchform-respond">Search cannot be done. You need PHP server to search.</div>');
  
              })
      });
  
      //header search form
      jQuery('.search_form_trigger').on('click', function() {
          jQuery('.theme_header').addClass('search-active');
      })
      jQuery('.search_form_close').on('click', function() {
          jQuery('.theme_header').removeClass('search-active');
      })
  
      //MailChimp subscribe form processing
      jQuery('.signup').on('submit', function(e) {
          e.preventDefault();
          var $form = jQuery(this);
          // update user interface
          $form.find('.response').html('Adding email address...');
          // Prepare query string and send AJAX request
          jQuery.ajax({
              url: 'mailchimp/store-address.php',
              data: 'ajax=true&email=' + escape($form.find('.mailchimp_email').val()),
              success: function(msg) {
                  $form.find('.response').html(msg);
              }
          });
      });
  
      //twitter
      if (jQuery().tweet) {
          jQuery('.twitter').tweet({
              modpath: "./twitter/",
              count: 2,
              avatar_size: 48,
              loading_text: 'loading twitter feed...',
              join_text: 'auto',
              username: 'ThemeForest',
              template: "<div class=\"tweet\"><span class=\"tweet_text\">{tweet_text}</span>{time}</div>"
          });
      }
  
  
      /////////
      //shop///
      /////////
      jQuery('#toggle_shop_view').on('click', function(e) {
          e.preventDefault();
          jQuery(this).toggleClass('grid-view');
          jQuery('#products').toggleClass('grid-view list-view');
      });
      //zoom image
      if (jQuery().elevateZoom) {
          jQuery('#product-image').elevateZoom({
              gallery: 'product-image-gallery',
              cursor: 'pointer',
              galleryActiveClass: 'active',
              responsive: true,
              loadingIcon: 'img/AjaxLoader.gif'
          });
      }
  
      //add review button
      jQuery('.review-link').on('click', function(e) {
          var thisLink = jQuery(this);
          var reviewTabLink = jQuery('a[href="#reviews_tab"]');
          //show tab only if it's hidden
          if (!reviewTabLink.parent().hasClass('active')) {
              reviewTabLink
                  .tab('show')
                  .on('shown.bs.tab', function(e) {
                      jQuery(window).scrollTo(jQuery(thisLink).attr('href'), 400);
                  })
          }
          jQuery(window).scrollTo(jQuery(thisLink).attr('href'), 400);
      });
  
      //product counter
  
  
      //remove product from cart
   
  
      //price filter
     
  
      //color filter 
    
      //adding CSS classes for elements that needs different styles depending on they widht width
      //see 'plugins.js' file
      jQuery('#mainteasers .col-lg-4').addWidthClass({
          breakpoints: [500, 600]
      });
  
  
      //background image teaser
      jQuery(".bg_teaser").each(function() {
          var $teaser = jQuery(this);
          var imagePath = $teaser.find("img").first().attr("src");
          $teaser.css("background-image", "url(" + imagePath + ")");
          if (!$teaser.find('.bg_overlay').length) {
              $teaser.prepend('<div class="bg_overlay"/>');
          }
      });
  
      jQuery(".bg_teaser").on('mouseover', function() {
          jQuery(".bg_teaser.hovered").removeClass('hover');
      });
      jQuery(".bg_teaser").on('mouseout', function() {
          jQuery(".bg_teaser.hovered").addClass('hover');
      });
  
  
  
      // Equalize height of footer widjets
      jQuery('.theme_footer .widget').matchHeight();
  
      // Equalize height of teasers in tab pane
      jQuery('.teaser-row .teaser').matchHeight();
  
  } //eof documentReadyInit
  
  //function that initiating template plugins on window.load event
  function windowLoadInit() {
      
      pieChart();
  
      
      if (jQuery().flexslider) {
          var $introSlider = jQuery(".intro_section .flexslider");
          $introSlider.each(function(index) {
              var $currentSlider = jQuery(this);
              $currentSlider.flexslider({
                      animation: "fade",
                      pauseOnHover: true,
                      useCSS: true,
                      controlNav: true,
                      directionNav: false,
                      prevText: "",
                      nextText: "",
                      smoothHeight: false,
                      slideshowSpeed: 10000,
                      animationSpeed: 600,
                      start: function(slider) {
                          slider.find('.slide_description').children().css({
                              'visibility': 'hidden'
                          });
                          slider.find('.flex-active-slide .slide_description').children().each(function(index) {
                              var self = jQuery(this);
                              var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
                              setTimeout(function() {
                                  self.addClass("animated " + animationClass);
                              }, index * 200);
                          });
                      },
                      after: function(slider) {
                          slider.find('.flex-active-slide .slide_description').children().each(function(index) {
                              var self = jQuery(this);
                              var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
                              setTimeout(function() {
                                  self.addClass("animated " + animationClass);
                              }, index * 200);
                          });
                      },
                      end: function(slider) {
                          slider.find('.slide_description').children().each(function() {
                              var self = jQuery(this);
                              var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
                              self.removeClass('animated ' + animationClass).css({
                                  'visibility': 'hidden'
                              });
                              
                          });
                      },
  
                  })
                  
                  .find('.flex-control-nav')
                  .wrap('<div class="container nav-container"/>')
          }); 
  
          jQuery(".flexslider").each(function(index) {
              var $currentSlider = jQuery(this);
          
              if ($currentSlider.find('.flex-active-slide').length) {
                  return;
              }
              $currentSlider.flexslider({
                  animation: "fade",
                  useCSS: true,
                  controlNav: true,
                  directionNav: false,
                  prevText: "",
                  nextText: "",
                  smoothHeight: false,
                  slideshowSpeed: 5000,
                  animationSpeed: 800,
              })
          });
      }
  
      ////////////////////
      //header processing/
      ////////////////////
      //stick header to top
  
     
  
      //aside affix
      affixSidebarInit();
  
      jQuery('body').scrollspy('refresh');
  
      //animation to elements on scroll
      if (jQuery().appear) {
          jQuery('.to_animate').appear();
          jQuery('.to_animate').filter(':appeared').each(function(index) {
              var self = jQuery(this);
              var animationClass = !self.data('animation') ? 'fadeInUp' : self.data('animation');
              var animationDelay = !self.data('delay') ? 210 : self.data('delay');
              setTimeout(function() {
                  self.addClass("animated " + animationClass);
              }, index * animationDelay);
          });
  
          jQuery('body').on('appear', '.to_animate', function(e, $affected) {
              jQuery($affected).each(function(index) {
                  var self = jQuery(this);
                  var animationClass = !self.data('animation') ? 'fadeInUp' : self.data('animation');
                  var animationDelay = !self.data('delay') ? 210 : self.data('delay');
                  setTimeout(function() {
                      self.addClass("animated " + animationClass);
                  }, index * animationDelay);
              });
          });
      }
  
      //counters init on scroll
      if (jQuery().appear) {
          jQuery('.counter').appear();
          jQuery('.counter').filter(':appeared').each(function(index) {
              if (jQuery(this).hasClass('counted')) {
                  return;
              } else {
                  jQuery(this).countTo().addClass('counted');
              }
          });
          jQuery('body').on('appear', '.counter', function(e, $affected) {
              jQuery($affected).each(function(index) {
                  if (jQuery(this).hasClass('counted')) {
                      return;
                  } else {
                      jQuery(this).countTo().addClass('counted');
                  }
  
              });
          });
      }
  
      //bootstrap animated progressbar
  
      //flickr
   
      //video images preview
   
  
      // init Isotope
  
  
      //page preloader
      jQuery(".preloaderimg").fadeOut();
      jQuery(".preloader").delay(200).fadeOut("slow").delay(200, function() {
          jQuery(this).remove();
      });
  } //eof windowLoadInit
  
  jQuery(document).ready(function() {
      documentReadyInit();
  }); //end of "document ready" event
  
  
  jQuery(window).on('load', function() {
      windowLoadInit();
  
      //Google Map script
      var $googleMaps = jQuery('#map, .page_map');
      if ($googleMaps.length) {
          $googleMaps.each(function() {
              var $map = jQuery(this);
  
              var lat;
              var lng;
              var map;
  
              //map styles. You can grab different styles on https://snazzymaps.com/
              var styles = [{
                  "featureType": "administrative.country",
                  "elementType": "geometry",
                  "stylers": [{
                      "visibility": "simplified"
                  }, {
                      "hue": "#ff0000"
                  }]
              }];
  
              //map settings
              var address = $map.data('address') ? $map.data('address') : 'london, baker street, 221b';
              var markerDescription = $map.find('.map_marker_description').prop('outerHTML');
  
              //if you do not provide map title inside #map (.page_map) section inside H3 tag - default titile (Map Title) goes here:
              var markerTitle = $map.find('h3').first().text() ? $map.find('h3').first().text() : 'Map Title';
              var markerIconSrc = $map.find('.map_marker_icon').first().attr('src');
  
              //type your address after "address="
              jQuery.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address=' + address, function(data) {
  
                  lat = data.results[0].geometry.location.lat;
                  lng = data.results[0].geometry.location.lng;
  
              }).complete(function() {
  
                  var center = new google.maps.LatLng(lat, lng);
                  var settings = {
                      mapTypeId: google.maps.MapTypeId.ROADMAP,
                      zoom: 17,
                      draggable: false,
                      scrollwheel: false,
                      center: center,
                      styles: styles
                  };
                  map = new google.maps.Map($map[0], settings);
  
                  var marker = new google.maps.Marker({
                      position: center,
                      title: markerTitle,
                      map: map,
                      icon: markerIconSrc,
                  });
  
                  var infowindow = new google.maps.InfoWindow({
                      content: markerDescription
                  });
  
                  google.maps.event.addListener(marker, 'click', function() {
                      infowindow.open(map, marker);
                  });
  
              });
          }); //each
      } //google map length
  
  }); //end of "window load" event
  
  
  $(document).ready(function(){
      //Team Slider 
      $(".team-slider-one").owlCarousel({
           nav: true,
           dots: true,
           loop: true,
           navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
           margin: 25,
           items: 1,
           thumbs: false,
           smartSpeed: 1300,
           autoplay: true,
           autoplayTimeout: 4000,
           autoplayHoverPause: false,
           responsiveClass: true,
           autoHeight: true,
           responsive: {
               0: {
                   items: 1,
               },
               768: {
                   items: 2,
               },
               1200: {
                   items: 3,
               }
           }
       });
   })
  
  
  
     //Team Slider 
     $(".ct_team_sldr").owlCarousel({
          nav: true,
          dots: true,
          loop: true,
          navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
          margin: 25,
          items: 1,
          thumbs: false,
          smartSpeed: 1300,
          autoplay: true,
          autoplayTimeout: 4000,
          autoplayHoverPause: false,
          responsiveClass: true,
          autoHeight: true,
          responsive: {
              0: {
                  items: 1,
              },
              768: {
                  items: 2,
              },
              1200: {
                  items: 3,
              }
          }
      });
      $('.ct_client_brand').owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      smartSpeed: 2000,
      nav: true,
      items: 1,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 2
          },
          1000: {
              items: 3
          }
      }
  })
  
  });