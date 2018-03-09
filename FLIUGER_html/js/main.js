let arr = [],
    answer = 0;
/*Подключение попапа*/
$('.my-btn').on('click', function(event){
  event.preventDefault();
  $('.popup-wrap').fadeIn();
});

$('.answer').click(function(){
  answer = $(this).data('index');
  console.log(arr);  
});

$('.next').click(function(){
  arr.push(answer);
  $('.qwest').removeClass('active');
  $('.qwest[data-index="'+answer+'"]').addClass('active');
  if (answer == 9) {$('.wrap-footer').hide('fast');}
});


 $('.answer-1').click(function(){
        var answer = $(this).data('text');
        $('.ans-1').val(answer);
        setTimeout(function(){
            $('.num-progress').css({
                width: '24.4%'
            })
        }, 700);
    });
    $('.answer-2').click(function(){
        var answer = $(this).data('text');
        $('.ans-2').val(answer);
        setTimeout(function(){
            $('.num-progress').css({
                width: '33.8%'
            })
        }, 700);
    });
    $('.answer-3').click(function(){
        var answer = $(this).data('text');
        $('.ans-3').val(answer);
        setTimeout(function(){
            $('.num-progress').css({
                width: '43.2%'
            })
        }, 700);
    });
    $('.answer-4').click(function(){
        var answer = $(this).data('text');
        $('.ans-3').val(answer);
        setTimeout(function(){
            $('.num-progress').css({
                width: '52.6%'
            })
        }, 700);
    });
    $('.answer-5').click(function(){
        var answer = $(this).data('text');
        $('.ans-3').val(answer);
        setTimeout(function(){
            $('.num-progress').css({
                width: '62%'
            })
        }, 700);
    });
    $('.answer-6').click(function(){
        var answer = $(this).data('text');
        $('.ans-3').val(answer);
        setTimeout(function(){
            $('.num-progress').css({
                width: '71.4%'
            })
        }, 700);
    });
    $('.answer-7').click(function(){
        var answer = $(this).data('text');
        $('.ans-3').val(answer);
        setTimeout(function(){
            $('.num-progress').css({
                width: '80%'
            })
        }, 700);
    });
    $('.answer-8').click(function(){
        var answer = $(this).data('text');
        $('.ans-3').val(answer);
        setTimeout(function(){
            $('.num-progress').css({
                width: '90%'
            })
        }, 700);
    });
    $('.answer-9').click(function(){
        var answer = $(this).data('text');
        $('.ans-3').val(answer);
        setTimeout(function(){
            $('.num-progress').css({
                width: '100%'
            })
        }, 700);
    });
   
   
var wow = new WOW;
wow.init();




                                                                    