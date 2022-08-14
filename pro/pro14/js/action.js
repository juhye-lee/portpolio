// JavaScript Document

//우측 메뉴 버튼 및 메뉴 나타내기
$( document ).ready( function() {
  $( 'a.MenuBtn' ).click( function() {
    $( 'a.MenuBtn' ).toggleClass( 'active' );
    $( 'nav.Menu' ).toggleClass( 'open' );
  } ); //우측 메뉴 버튼 및 메뉴 나타내기

  $(".GNB>ul>li>a").mouseenter( function(){
      $(".GNB>ul>li").removeClass("hover");
      $(this).parent().addClass("hover");
      var lisize = $(this).siblings('ul').children().length;
      if(lisize > 5){ $(this).siblings('ul').children().css({'min-width':"155px"});
      $(this).siblings('ul').css({'left':"300px"}); 
      $(this).next().css({'left':"100px"}); }

      var ulheight = $(this).siblings('ul').outerHeight();
      $(".GNB").stop().animate( {height: ulheight + 72}, 100, 'linear' );
      $(".GNB").css({'box-shadow':"3px 3px 5px rgba(0, 0, 0, 0.1)"})
  });

  $('.GNB').mouseleave(function() { 
      $(".GNB").animate({ height: '70' }, 100, 'linear', function () {
        $(".GNB>ul>li").removeClass("hover");
        $(".GNB").css({'box-shadow':"none"})
      });
  });

  $('.SubMenu>ul>li>a').click(function(){
    if($(this).parent().hasClass("M_on"))
    {    
      $(this).next().slideUp(300, function () { $(this).parent().removeClass("M_on"); }); 
    }
    else{
      $(this).next().slideDown(300);
      $(this).parent().addClass("M_on");
    }
  })
});