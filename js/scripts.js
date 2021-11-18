$(function(){

    $('#mycarousel').carousel({interval:2000});

    $('#carouselButton').on('click',function(){

        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else if($('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });

    $('#loginButton').on('click',function(){
        $('#loginModal').modal('toggle');
    });

    $('#loginModalCloseBtn').on('click',function(){
        $('#loginModal').modal('hide');
    });

    $('#loginModalCancelBtn').on('click',function(){
        $('#loginModal').modal('hide');
    });

    $('#reserveBtn').on('click',function(){
        $('#reservationModal').modal('toggle');
    });

    $('#reservationModalCloseBtn').on('click',function(){
        $('#reservationModal').modal('hide');
    });

    $('#reservationModalCancelBtn').on('click',function(){
        $('#reservationModal').modal('hide');
    });

});