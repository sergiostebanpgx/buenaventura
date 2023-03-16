/*var slideRight = new Menu({
    wrapper: '#o-wrapper',
    type: 'slide-right',
    menuOpenerClass: '.c-button',
    maskId: '#c-mask'
});

jQuery(document).on('click', '#c-button--slide-right', function(e) {
    e.preventDefault;
    slideRight.open();
});*/

var altura = 0;
var altura_desktop = jQuery(".cabecera-desktop").innerHeight();
var altura_mobile = jQuery(".cabecera-mobile").innerHeight();

jQuery(window).on("load",function() {
	jQuery(".overlay").fadeOut("slow",function(){
		jQuery("body").removeClass("preloader");
        jQuery(".imagen-fondo").addClass("abierto");
	});

    intro();
});

function intro()
{
    var ancho_pantalla = jQuery(window).width();
    var ancho_b = jQuery(".bloque-b").width();
    var ancho_p1 = jQuery(".intro-paso-1").width();
    var ancho_p2 = jQuery(".intro-paso-2").width();
    jQuery(".bloque-b").delay(2500).animate({
        "left" : ancho_pantalla}, 1500, 'swing', function () {
        jQuery(".intro-paso-1").addClass("abierto");
        jQuery(".bloque-b").delay(250).animate({
            "left" : ancho_b,
        },1500, 'swing',function(){
            //jQuery(".intro-paso-1").removeClass("abierto");
            setTimeout(function(){
               jQuery(".intro-paso-1").removeClass("abierto");
               jQuery(".bloque-b").delay(500).animate({
                "left" : ancho_pantalla
               },2000, 'swing',function(){
                    var restar = 0;    
                    if(ancho_pantalla < 1199)
                    {
                        restar = ancho_b / 2;
                    }

                    jQuery(".bloque-b").delay(150).animate({
                        "left" : ancho_b - restar,
                    }, 2000, 'swing',function(){

                    })
                    jQuery(".intro-paso-2").addClass("abierto");
               });
                
            },
            1000)
        })
    });
    
}

jQuery(window).resize(function() {
altura_desktop = jQuery(".cabecera-desktop").innerHeight();
altura_mobile = jQuery(".cabecera-mobile").innerHeight();

if(jQuery(window).width() < 768)
{
    altura = altura_mobile;
}else{
    altura = altura_desktop;
}

});

jQuery(document).ready(function(){
    jQuery('.img-logo').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');
            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            // Replace image with new SVG
            $img.replaceWith($svg);
        }, 'xml');
    });


    if(jQuery(window).width() < 768)
    {
        altura = altura_mobile;
    }else{
        altura = altura_desktop;
    }

  /*  jQuery("#telefono").keypress(function(e) {
        var r = e.keyCode || e.which;
        return r > 45 && r < 65 || 8 == r
    });

    jQuery('#carouselExampleIndicators').carousel({
      interval: 4000
    })*/

    var wow = new WOW();
    wow.init();

    jQuery(".burguer").click(function(e){
        e.preventDefault();
        jQuery(".burguer").toggleClass("open");
        jQuery("nav.lista-menu").toggleClass("open");
    });

    jQuery(".paginador .pagina").click(function(e){
        e.preventDefault();
        var pagina = jQuery(this).data("pg");
        jQuery(".paginador .pagina").removeClass("activo");
        jQuery(this).addClass("activo");
        jQuery(".columna-rosada").addClass("pagina-cerrada");
        jQuery(".columna-rosada.grupo"+pagina).removeClass("pagina-cerrada");
    });

	jQuery('nav.lista-menu a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        jQuery(".burguer").removeClass("open");
        jQuery("nav.lista-menu").removeClass("open");
      
        var target = this.hash;
        var menu = target;
        target = jQuery(target); 
         if(jQuery(target).length > 0)
        { 
            jQuery("nav.lista-menu a").removeClass("active");
            jQuery(this).addClass("active");

            setTimeout(function(){
                jQuery('html, body').stop().animate({
                    'scrollTop': target.offset().top - altura}, 600, 'swing', function () {
                    //window.location.hash = menu;
                });
             },400);
        }
    });
});

jQuery('.bloque-columna-rosada').on('mouseenter touchstart', function(){ 
     jQuery(this).addClass("abierto");
});

jQuery('.bloque-columna-rosada').on('mouseleave touchend', function(){
     jQuery(this).removeClass("abierto");
});