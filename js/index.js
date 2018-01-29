$(document).ready(function() {

//Tooltip
//-----------------------------------------------
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//Fade Ins
//-----------------------------------------------
$(function() {
    var show = $(".not-visible");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 600) {
            show.removeClass('not-visible').addClass("visible");
        } else {
            show.removeClass("visible").addClass('not-visible');
        }
    });
});

$(function() {
    var fadeShow = $(".fading-in");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 1100) {
            fadeShow.addClass("fadeIn");
        }
    });
});

$(function() {
    var drFadeShow = $(".doctor-fade-in");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 400) {
            drFadeShow.addClass("fadeIn");
        }
    });
});

var delay=200; //1 second

setTimeout(function() {
  $('.thumb-fade-in').addClass("opacity-full");
}, delay);

//Smooth Scroll
//-----------------------------------------------
if ($(".smooth-scroll").length>0) {
  $('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-151
        }, 600);
        return false;
      }
    }
  });
}

// Diabling Map Scroll

$('.map-responsive').click(function () {
    $('.map-responsive iframe').css("pointer-events", "auto");
});


// Read Mores
//-----------------------------------------------

// Read More/Less Roger

function expandRoger(){
   event.preventDefault();
   $('#rogerText').css({
     "height": "auto",
   })
   $('#rogerReadMore').css({
     "display": "none",
   })
   $('#rogerReadLess').css({
     "display": "inline-block",
   })

   ;
 }
 $('#rogerReadMore').click(expandRoger);

 function retractRoger(){
   event.preventDefault();
    $('#rogerText').css({
      "height": "110px",
    })
    $('#rogerReadMore').css({
      "display": "inline-block",
    })
    $('#rogerReadLess').css({
      "display": "none",
    })
    ;
  }
  $('#rogerReadLess').click(retractRoger);

  // Read More/Less Ali

  function expandAli(){
     $('#aliText').css({
       "height": "auto",
     })
     $('#aliReadMore').css({
       "display": "none",
     })
     $('#aliReadLess').css({
       "display": "inline-block",
     })
     event.preventDefault();
     ;
   }
   $('#aliReadMore').click(expandAli);

   function retractAli(){
      $('#aliText').css({
        "height": "110px",
      })
      $('#aliReadMore').css({
        "display": "inline-block",
      })
      $('#aliReadLess').css({
        "display": "none",
      })
      event.preventDefault();
      ;
    }
    $('#aliReadLess').click(retractAli);

    // Read More/Less Sea

    function expandSea(){
       $('#seaText').css({
         "height": "auto",
       })
       $('#seaReadMore').css({
         "display": "none",
       })
       $('#seaReadLess').css({
         "display": "inline-block",
       })
       event.preventDefault();
       ;
     }
     $('#seaReadMore').click(expandSea);

     function retractSea(){
        $('#seaText').css({
          "height": "110px",
        })
        $('#seaReadMore').css({
          "display": "inline-block",
        })
        $('#seaReadLess').css({
          "display": "none",
        })
        event.preventDefault();
        ;
      }
      $('#seaReadLess').click(retractSea);

      // Read More/Less Kevin

      function expandKevin(){
         $('#kevinText').css({
           "height": "auto",
         })
         $('#kevinReadMore').css({
           "display": "none",
         })
         $('#kevinReadLess').css({
           "display": "inline-block",
         })
         event.preventDefault();
         ;
       }
       $('#kevinReadMore').click(expandKevin);

       function retractKevin(){
          $('#kevinText').css({
            "height": "110px",
          })
          $('#kevinReadMore').css({
            "display": "inline-block",
          })
          $('#kevinReadLess').css({
            "display": "none",
          })
          event.preventDefault();
          ;
        }
        $('#kevinReadLess').click(retractKevin);

        // Read More/Less Lauren

        function expandLauren(){
           $('#laurenText').css({
             "height": "auto",
           })
           $('#laurenReadMore').css({
             "display": "none",
           })
           $('#laurenReadLess').css({
             "display": "inline-block",
           })
           event.preventDefault();
           ;
         }
         $('#laurenReadMore').click(expandLauren);

         function retractLauren(){
            $('#laurenText').css({
              "height": "110px",
            })
            $('#laurenReadMore').css({
              "display": "inline-block",
            })
            $('#laurenReadLess').css({
              "display": "none",
            })
            event.preventDefault();
            ;
          }
          $('#laurenReadLess').click(retractLauren);

          // Read More/Less Peter

          function expandPeter(){
             $('#peterText').css({
               "height": "auto",
             })
             $('#peterReadMore').css({
               "display": "none",
             })
             $('#peterReadLess').css({
               "display": "inline-block",
             })
             event.preventDefault();
             ;
           }
           $('#peterReadMore').click(expandPeter);

           function retractPeter(){
              $('#peterText').css({
                "height": "110px",
              })
              $('#peterReadMore').css({
                "display": "inline-block",
              })
              $('#peterReadLess').css({
                "display": "none",
              })
              event.preventDefault();
              ;
            }
            $('#peterReadLess').click(retractPeter);


// ---

});
