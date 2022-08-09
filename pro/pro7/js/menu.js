$(document).ready(function(){
                
             $(".on .submenu").css("display","block")
             $(".on>ul>li:first-child").addClass("on");
                
          });
                
           function menuslide(menu){
               
               $(".submenu").slideUp('fast');
               $(menu).parent().addClass("on");
               
               $(menu).siblings().slideDown('fast');
               
               $(menu).parent().siblings().removeClass();
               $(menu).parent().addClass("on");
               $(".on>ul>li").removeClass();
               $(".on>ul>li:first-child").addClass("on");
           }
            
            function subslide(sub){
                $(sub).parent().siblings().removeClass();
				$(sub).parent().addClass("on");
                
            }
        
            
            function popWindowOpen() {
            $(".popUp").css("display", "block");
            $(".popUp").draggable();
            }

            function ConfirmPop() {
            $(".ConfirmPop").css("display", "block");
            $(".ConfirmPop").draggable();
            }


            function popWindowClose() {
                $(".popUp , .ConfirmPop").css("display", "none");
            }
            
            function changeText(tab){
				$(tab).parent().siblings().removeClass();
				$(tab).parent().addClass("on");
			}