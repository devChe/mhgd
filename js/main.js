
$(document).ready(function(){

    // loader

    // setTimeout(openLoader,1000);
    $('.line').addClass('active');
    countDown();
    function openLoader(){
        $('.top-side').addClass('active');
        $('.down-side').addClass('active');
    }

    function countDown(){
        var count = Number($('.count').find('span').html());
        if(count == 100){
           setTimeout(function(){
                $('.count').css('opacity',0);
           }, 500);
           setTimeout(function(){
                $('.top-side').addClass('active');
                $('.down-side').addClass('active');
            }, 1700);
            setTimeout(function(){
                $('.loader').css('display','none');
            }, 3000)
            return;
        } 
        $('.count').find('span').html(count + 1);
        setTimeout(countDown, 10);
    }

    $('.zmdi-menu').click(function(){
        if($('.top-expand').hasClass('active')){
            $('.top-expand').removeClass('active');
            $('.canvas').removeClass('menu-active');
            $('.menu').removeClass('active');
            $('.logo-menu').removeClass('active');

            $('.logo-container').css('transform','translateY(0)');
           
        } else {
            $('.top-expand').addClass('active');
            $('.canvas').addClass('menu-active');
            setTimeout(function(){
                $('.menu').addClass('active');
                $('.logo-menu').addClass('active');
            }, 550)
            setTimeout(function(){
                $('.logo-container').css('transform','translateY(-130px)');
            },500)
        }  
    });

    $('.home-car').slick({
        arrows: false,
        fade: true,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: false
    });

    $('.home-car').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        console.log(nextSlide);
        if(nextSlide == 3 || nextSlide == 2){
            nextSlide == 3 ? $('.car-next').css('display','none') : $('.car-next').css('display','block');
            $('.logo-container').addClass('white');
            $('.menu').addClass('white');
            $('.top-expand').addClass('white');
            $('.car-next').addClass('white');
            $('.car-previous').addClass('white');
            $('.short-desc').addClass('white');
            $('.logo-menu').removeClass('white');
        }else if(nextSlide == 0){
            $('.car-previous').css('display','none');
        }else{
            $('.car-next').css('display','block');
            $('.car-previous').css('display','block');
            $('.logo-container').removeClass('white');
            $('.menu').removeClass('white');
            $('.top-expand').removeClass('white');
            $('.car-next').removeClass('white');
            $('.car-previous').removeClass('white');
            $('.short-desc').removeClass('white');
            $('.logo-menu').addClass('white');
        }
    });

    $('.car-next').click(function(){
        $('.home-car').slick('slickNext');
    });
    $('.car-previous').click(function(){
        $('.home-car').slick('slickPrev');
    });
})