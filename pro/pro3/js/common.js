$(function() {
    
    $('a[href="#"]').click(function(e) {
	e.preventDefault();
        
    });
    
     var burger = $('.menu-trigger');

            burger.each(function(index){
                var $this = $(this);

                $this.on('click', function(e){
                    e.preventDefault();
                    $(this).toggleClass('active-' + (index+1));
                    $('.Menu').slideToggle();
                })
            });
    

/*
    $(window).resize(function() {
    if(this.resizeTO) {
        clearTimeout(this.resizeTO);
    }
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 300);
});
*/

    $(window).resize(function() {
        var Dwidth = $(window).width();
     /*   console.log('>>> Dwidth :', Dwidth);*/
      
        if( Dwidth<=1099){ 
        /*    console.log('resize invoke....');*/
            $('.Menu').slideUp();
            $('.menu-trigger').removeClass('active-1');  

            $('.tab li').click(function(){
                var Dwidth = $(window).width();
                if( Dwidth<=1099){
                var tabneme = $(this).text();
                $('.M_tab').text(tabneme);
                $('.tab').slideUp();
                }
            });

            $('.Menu ul li .subNo').click(function(){
                var Dwidth = $(window).width();
              /*  console.log('>> in click Dwidth : ', Dwidth); */
                if( Dwidth<=1099){
                  /*  console.log('menu li click invoke....');*/
                    $('.Menu').slideUp();
                    $('.menu-trigger').removeClass('active-1');  
                 }
            });
         }
             
    }); 
            
       $('.SubMenutt').on('click',function(){
           /*$('.Menu>ul li a').removeClass('on');*/
           $('.Menu>ul li a i').removeClass('up');
           $('.SubMenu').slideUp();
           $(this).next('ul').slideDown();
           $(this).children('i').addClass('up');
        });
    

  
        $('.Menu>ul>li').on('mouseleave',function(){
           $('.SubMenu').slideUp();
           $(this).children('a').children('i').removeClass('up'); 
          /* $(this).children('a').removeClass('on');*/
        });
    
        $('.subNo').click(function(){
            if( Dwidth>1099){
            $('.Menu').show();
            $('.Menu>ul>li>a').removeClass('on');
            $(this).addClass('on');
            }
        });    
    
         $('.SubMenu li a').on('click',function(){
            $('.Menu>ul>li>a').removeClass('on');
            $(this).parent().parent().siblings('a').addClass('on');
            $('.SubMenu').hide(); /*$(this).parent().parent().siblings('a').children('i').removeClass('up');*/

            var Dwidth = $(document).width(); // 모바일 사이즈에서 메뉴 클릭시 위로 올라가게함.
            if(Dwidth < 1099) {
              $('.Menu').slideUp();
              $('.menu-trigger').removeClass('active-1');  
            };  
        });
        
         var Dwidth = $(document).width(); // 모바일 사이즈에서 메뉴 클릭시 위로 올라가게함.
         var Height = $(window).height();
         $('.loginBack').height(Height/*-FHeight*/);
   /*     var FHeight = $('footer').height();*/
         if(Dwidth < 1099){
            $('.Menu>ul li .subNo').click(function(){
                  $('.Menu').slideUp();
                  $('.menu-trigger').removeClass('active-1');  
             }); 
             
             $('.tab li').click(function(){
                    var tabneme = $(this).text();
                    $('.M_tab').text(tabneme);
                    $('.tab').slideUp();
             });
          }
         if(Dwidth < 850){
             $('.LoginCover').height(Height/*-FHeight*/);
             if( Height < Dwidth ){
                  $('.LoginCover').height(Dwidth);
                  $('.loginBack').height(Dwidth);
             }  
          }
       $('.layer_popUp_back').css('height',Height);
       $('.contentCenter').css('min-height',Height-195);
      
        $(window).resize(function(){ 
            $('.layer_popUp_back').css('height',Height);
            $('.loginBack').height(Height/*-FHeight*/);
            
        }); 
    
      /*팝업*/
       $('#TownSelect').click(function(){
          $('#TownSelect01').show(); 
           
       }); 
       $('#ItemSelect').click(function(){
          $('#ItemSelect01').show(); 
           
       }); 
     $('#addsearch').click(function(){
          $('#addsearchPop').show(); 
           
       }); 
    
    
       $('.CancelBtn').click(function(){
          $(this).parent().parent().parent().hide(); 
       });
    
     
    
        
    
       /* 서브메뉴 */
        $('.SubMenuSection ul li').click(function(){
             $('.SubMenuSection ul li').removeClass('on');
             $(this).addClass('on');
        });
       
         /* 아이디찾기 탭*/
        $('.searchTab li').click(function(){
             $('.searchTab li').removeClass('on');
             $(this).addClass('on');
             var tab = $(this).attr('id'); 
             $('.loginSection02').hide();
             $('.'+ tab).show();
        });

         $('.tab li').click(function(){
             $('.tab li').removeClass('on');
             $(this).addClass('on');
             var tab = $(this).attr('id'); 
             $('.tabCon').hide();
             $('.'+ tab).show();
         });

          $('.M_tab').click(function(){
             $('.tab').slideToggle();

          });
    
    
    
    
    
    
        /* dashboard over popup*/
      
    // function dashMouse(textex, x, y) {
              
          
    //            $('.datepop').css('top',y);
    //            $('.datepop').css('left',x);
          
    //            $('.datepop').children('span').text(textex);
    //            $('.datepop').css('display','block');

    // };
    
    //       $('.dashtable_01 tbody tr td').mouseenter(function(e){
    //           console.log("mouseenter");
    //           e.preventDefault();
    //            var x = event.clientX;
    //            var y = event.clientY; 
              
    //           var textex = $(this).children().text();
    //           dashMouse(textex ,x,y);
            
    //       });
    
    //       $('.dashtable_01 tbody tr td').mousemove(function(e){
    //         console.log("mousemove");
    //           e.preventDefault();
    //            var x = event.clientX;
    //            var y = event.clientY; 
              
    //           var textex = $(this).children().text();
    //           dashMouse(textex ,x,y);
            
            
    //       });
          

    //       $('.dashtable_01 tbody tr td').mouseout(function(){
    //         console.log("mouseout");
    //          $('.datepop').hide();

    //       });
    
        
    function onMouseEvent($obj, callback) {

        let inMouse = false;
        let x = 0;
        let y = 0;
        let poptext = 'good'; 

        $obj.on('mouseover mouseout mousemove', function(e){
            console.log(e.type);
            switch (e.type) {
                case 'mouseover':
                    inMouse = true;                   
                    break;
                case 'mouseout':
                    inMouse = false;
                    break;
                case 'mousemove':
                    x = e.pageX;
                    y = e.pageY;
                    poptext = this.firstChild.innerHTML;
                    break;
                default:
                    break;
            }

            callback(e, {
                inMouse : inMouse,
                x : x,
                y : y,
                poptext : poptext
            });
        });
    }

    onMouseEvent($('.dashtable_01 tbody tr td'), function(e, _data){

        let layerpop = $('.datepop');

        if(_data.inMouse) {
            layerpop.css({
                display : 'block',
                position : 'absolute',
                left: _data.x + 3,
                top: _data.y + 3
            });
            
            layerpop.children('span').text(_data.poptext);
            
        } else {
            layerpop.css({
                display : 'none',
            });
        }
       
    });
    
    var topleftwid = $('.topleftcon').height();
    $('.toprightcon').css('height',topleftwid);
    
     $('.timepickerimg').on('click',function(){
           
          let aa = $(this);
           aa.prev().focus();
        });
    
});
