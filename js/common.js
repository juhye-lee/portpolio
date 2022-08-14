$(document).ready(function () {

    // var secheight = $('.sec01');
    // var winh = $(window).height();
    // secheight.height(winh - 120);
    var percent = $('.percent');
    var percenttex = [];
    for (var i = 0; i < percent.length; i++) {percenttex.push(percent.eq(i).text());};
    $('.bar').eq(0).animate({width: '100%'}, 1000, function () {$('.bar').eq(0).animate({width: percenttex[0] + '%'}, 1000);});
    $('.bar').eq(1).animate({width: '100%'}, 1000, function () {$('.bar').eq(1).animate({width: percenttex[1] + '%'}, 1000);});
    $('.bar').eq(2).animate({width: '100%'}, 1000, function () {$('.bar').eq(2).animate({width: percenttex[2] + '%'}, 1000);});
    $('.bar').eq(3).animate({width: '100%'}, 1000, function () {$('.bar').eq(3).animate({width: percenttex[3] + '%'}, 1000);});
    $('.bar').eq(4).animate({width: '100%'}, 1000, function () {$('.bar').eq(4).animate({width: percenttex[4] + '%'}, 1000);});

    var $paging = $('.paging');
    var $projlist = $('.projlist');
    var $left = $('.left');
    var $right = $('.right');
    

    $paging.click(function(){
        $paging.removeClass("active");
        $(this).addClass("active");
        var indexnum =  $(this).addClass("active").index();
        $projlist.removeClass("active");
        $projlist.eq(indexnum).addClass("active");
    });	

    $left.click(function(){
        var indexnum = $projlist.parent().find(".active").index();
      
        $projlist.removeClass("active");
        indexnum -- ;
     
        if(indexnum == -1){
            indexnum = $projlist.length-1;
        };
        $projlist.eq(indexnum).addClass("active");
        $paging.removeClass("active");
        $paging.eq(indexnum).addClass("active");   

    });
    $right.click(function(){
        var indexnum = $projlist.parent().find(".active").index();
        $projlist.removeClass("active");
        indexnum ++ ;
        if(indexnum == $projlist.length){
            indexnum = 0;
        };
        $projlist.eq(indexnum).addClass("active");
        $paging.removeClass("active");
        $paging.eq(indexnum).addClass("active");   

    });

});