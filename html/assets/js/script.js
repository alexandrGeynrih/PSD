$(document).ready(function(){

    /*Mobile menu*/
    $("#mob-menu-btn").click(function(){    
        $(this).siblings("ul").toggle();
    });

    
    //Animation
    $("[data-animate='true']").each(function(){
        
         var animateType=$(this).data('animate-type');         
         $(this).viewportChecker({classToAdd: 'animated '+ animateType,
                                  offset: 100,
                                  delay:3000
                                 });
    });
    
    
    /* Our works carousel */
    $("#our-works-carousel").owlCarousel({nav : true,
                                   responsive:{
                                                0:{items:1,
                                                   nav:false
                                                   },
                                                
                                                760:{ items:2},                                           
                                                
                                                1000:{items:3,dots:false}
                                               },
                                    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>' ]
                                    
                                   });
     /* Our works magnific */
     $(".magnific").magnificPopup({type:'image'});
     
     
     /* Team carousel */
    $("#team-carousel").owlCarousel({nav : false,
                                   responsive:{
                                                0:{items:1,
                                                   nav:false
                                                   },
                                                
                                                760:{ items:2},                                           
                                                
                                                1000:{items:3}
                                               }                                    
                                   });
     /* Reviews carousel */
    $("#reviews-carousel").owlCarousel({nav : true,
                                   responsive:{
                                                0:{items:1,
                                                   nav:false
                                                   },
                                                
                                                760:{ items:1, nav:false},                                           
                                                
                                                1000:{items:1, dots:false}
                                               },
                                               navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>' ]
                                   });
    
    $(".menu-item").click(function(event){
        event.preventDefault();
        var sectionId=$(this).attr("href");
        var offset=$(sectionId).offset();
        var topmenuHeight= parseInt( $("#top-bar").outerHeight() );
        $("html, body").animate({ scrollTop: offset.top-topmenuHeight }, 600);
    });
    
    /* Scroll on top page */
    $("#scroll-top").click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
    });
   
   $(document).scroll(function(){
    
        var scrollTop=$(document).scrollTop();
        
        /*show up button*/
        if ( scrollTop > 200 ) {
            $("#scroll-top").show();
        }
        else
            $("#scroll-top").hide();
            
        
        
        
        
        
        /*fixed top menu*/
        
        if ( scrollTop > 50 ) {            
            $("#top-bar").addClass("fixed") ;
        }
        else
            $("#top-bar").removeClass("fixed") ;
    
    });
     
    
});