/**
 * 
 */
 $(document).ready(function(e) {
	//LNB
	$(function(){
		if($(".lnb").length > 0){
			var action = $(location).attr("href");
			
			action = action.split("/");
			action = action[action.length-1];//
			
			var target = $("ul.lnb li a[href*="+action.split(".")[0]+"]");
			
			if(target.parent("li").parent("ul").hasClass("lnb")){
				target.parent("li").addClass("active");	
			}else{
				target.parent("li").parent("ul").parent("li").addClass("active");
				target.parent("li").addClass("Sactive");
			}
			
			/*검색 null 체크*/
/*			$(".input_null").keydown(function(key) {
				if (key.keyCode == 13) {
					if($(this).val() == ""){
						alert("내용을 입력하세요");
						return false;
					}
				}
			});
			
			$(".input_null_all").keydown(function(key) {
				if (key.keyCode == 13) {
					if($(".fst").val() == "" || $(".snd").val() == "" || $(".thr").val() == ""){
						alert("내용을 입력하세요");
						return false;
					}
				}
			});
			
			$(".btn_click").click(function() {
			      if($(".input_null").val() == ""){
			         alert("내용을 입력해주세요.");
			         location.reload();
			         return false;
			      }
			})
				
			$(".btn_click_all").click(function() {
			      if($(".fst").val() == "" || $(".snd").val() == "" || $(".thr").val() == ""){
			         alert("내용을 입력해주세요.");
			         location.reload();
			         return false;
			      }
			})*/
			
			//$(".lnb > li:first").addClass("active");
			$(".lnb > li").on("click focus touchstart", function(){
				if($(this).hasClass("active")){
					$("ul",this).slideUp(150);
					$(this).removeClass("active");
				} else {
					$(".left_Msub").slideUp(150);
					$(".lnb > li").removeClass("active");
					$(this).addClass("active");
					$("ul",this).slideDown(150);
					
				};
			});
			
			$("ul.left_Msub > li").on("click focus touchstart", function(e){
				e.stopPropagation();
			});
		}

		/*
		$('#searchVrify').on('click',function(e){
			var search = document.getElementById("search").value;
			var url = "/system/share/survey.do?search="+search;
			$(location).attr('href',url);
		});  
		*/
		
		if($(".widthsize").length > 0){
			$("ul.widthsize > li > a").on("click focus touchstart", function(){
				$(this).closest("ul.widthsize").find("li").removeClass("active");
				$(this).parent("li").addClass("active");
				var type = $(this).attr("class");
				if(type == "basic"){
					$(".wrap-contents").removeClass("EXTEND");					
				}else{
					$(".wrap-contents").addClass("EXTEND");
				}
			});
		}
		
		var href = location.href.split("/");
		$(".TotalPop .Tdepth01 li").removeClass("active");
		if(href.length > 0){
			var url = href[href.length-1];
			var menuA = $(".TotalPop .Tdepth01 li > a[href$='".concat(url,"']"));
			if(menuA.closest("li.smenuOn").length > 0){
				menuA.closest("li.smenuOn").addClass("active");
			}
			menuA.closest("ul.Tdepth02").parent("li").addClass("active");
		}
		
//		$.ajax({
//	        success: function(){
//	        	var url = "/system/gis/statMap.do";
//	        	$(".statMap > li:nth-child(1)").on("click", function(){ window.location.href= url.concat("?indx=2")});
//	    		$(".statMap > li:nth-child(2)").on("click", function(){ window.location.href= url.concat("?indx=3")});
//	    		$(".statMap > li:nth-child(3)").on("click", function(){ window.location.href= url.concat("?indx=4")});
//	    		$(".statMap > li:nth-child(4)").on("click", function(){ window.location.href= url.concat("?indx=5")});
//	        }
//		});
	});
	
	var windowWidth = $( window ).width();
	$(".btn_total").click(function(){
		
		if(!window.$dragRunabled && window.$dragRunabled != undefined){
			alert("My지도 기능을 수행하는 중에는 메뉴이동이 제한됩니다.");
			return false;
		}
		
//		if( windowWidth > 1024){
//		$(".TotalBack").removeClass("Hidden");
//		}
//		else {
//			$(".TotalBack").css('width' , '100%');
//			$(".TotalPop").css('width','80%');
//		};
		if( windowWidth < 1024){
			$(".TotalBack").css('width' , '100%');
			$(".TotalPop").css('width','80%');
		}
			
		$(".TotalBack").removeClass("Hidden");
	});

	$(".TPopcolose").click(function(){
//		if( windowWidth > 1024){
//			$(".TotalBack").addClass("Hidden");
//		}
//		else{
//			$(".TotalBack").css('width' ,'0px');
//			$(".TotalPop").css('width','0px');
//		};
		if( windowWidth < 1024){
			$(".TotalBack").css('width' ,'0px');
			$(".TotalPop").css('width','0px');
		}
		$(".TotalBack").addClass("Hidden");
	});

	$( window ).resize( function() {
		console.log($(window).width())
		var rwindowWidth = $(window).width();
	
		$("#Btn_total").click(function(){
			if( rwindowWidth > 1024){
			$(".TotalBack").removeClass("Hidden");
			}
			else if(rwindowWidth <= 1024){
				$(".TotalBack").css({
					width : "100%"
				});
				$(".TotalPop").css('width','80%');
			};
		});
	
		$("#TpopClose").click(function(){
			if( rwindowWidth > 1024){
				console.log('그냥닫기');
				$(".TotalBack").addClass("Hidden");
			}
			else if(rwindowWidth <= 1024){
				console.log('슬라이드닫기');
				$(".TotalBack").css('width' ,'0px');
				$(".TotalPop").css('width','0px');
			};
		});
	});
	
	$(".TotalPop .Tdepth01 > li > a").click(function(e){
		e.preventDefault();
		if($(this).parent("li").hasClass("active")){
			$(".TotalPop .Tdepth01 > li").removeClass("active");
		}else{
			$(".TotalPop .Tdepth01 > li").removeClass("active");
			$(this).parent("li").addClass("active");
		}
	});
	
	$(".TotalPop .Tdepth01 > li .Tdepth02 li.smenuOn > a").click(function(e){
		e.preventDefault();
		if($(this).parent("li").hasClass("active")){
			$(".TotalPop .Tdepth01 > li .Tdepth02 li.smenuOn").removeClass("active");
		}else{
			$(".TotalPop .Tdepth01 > li .Tdepth02 li.smenuOn").removeClass("active");
			$(this).parent("li").addClass("active");
		}
	});
	
	$("div.GoSite > a").click(function(e){
		e.preventDefault();
		if($("div.GoSite > ul.goSiteUl").hasClass("Hidden")){
			$("div.GoSite > ul.goSiteUl").removeClass("Hidden");
		}else{
			$("div.GoSite > ul.goSiteUl").addClass("Hidden");
		}
	});
	
	$(document).on("click","a[href='#none']",function(e){
		e.preventDefault();
	});
	
	//jquery datepicker 한글 설정
	if($.datepicker){
		$.datepicker.regional['kr'] = {
		    closeText: '닫기', // 닫기 버튼 텍스트 변경
		    currentText: '오늘', // 오늘 텍스트 변경
		    monthNames: ['1 월','2 월','3 월','4 월','5 월','6 월','7 월','8 월','9 월','10 월','11 월','12 월'], // 개월 텍스트 설정
		    monthNamesShort: ['1 월','2 월','3 월','4 월','5 월','6 월','7 월','8 월','9 월','10 월','11 월','12 월'], // 개월 텍스트 설정
		    dayNames: ['월요일','화요일','수요일','목요일','금요일','토요일','일요일'], // 요일 텍스트 설정
		    dayNamesShort: ['월','화','수','목','금','토','일'], // 요일 텍스트 축약 설정&nbsp;   
		    dayNamesMin: ['월','화','수','목','금','토','일'], // 요일 최소 축약 텍스트 설정
		    dateFormat: 'yy년 mm월 dd일', // 날짜 포맷 설정
		    showButtonPanel: true,
		    maxDate: "today",
		    changeMonth: true,
		    changeYear: true,
		    showButtonPanel: true,
		    yearRange: 'c-99:c+99',
		    showOtherMonths: true,
		    selectOtherMonths: true 
		};

		// Seeting up default language, Korean
		$.datepicker.setDefaults($.datepicker.regional['kr']);
		
		if($("#sDate").length == 1 && $("#eDate").length == 1) {
			$("#sDate").datepicker({
				onSelect: function(date){
					var eDate = $("#eDate");
					var sDate = $(this).datepicker("getDate");
					var min = $(this).datepicker("getDate");
					eDate.datepicker("setDate",min);
					//sDate.setDate(sDate.getDate() + 30);
					//eDate.datepicker('option', 'maxDate', sDate);
					eDate.datepicker('option', 'minDate', min);
				}
			});
			$("#eDate").datepicker({
				minDate: new Date($("#sDate").datepicker("getDate"))
			});
		}else{
			$(".dtPicker").datepicker();
		}
		
	}

	$.ajaxSetup({
        beforeSend:function(xhr){
        	xhr.setRequestHeader("AJAX", true);
        },error: function(xhr, status, err){
        	if(xhr.status != 200) {
            	if (xhr.status == 401) {
            		alert("인증에 실패 했습니다. 로그인 페이지로 이동합니다.");
            		location.href = "/login.do";
            	}else if(xhr.status == 403){
            		alert("세션이 만료가 되었습니다. 로그인 페이지로 이동합니다.");
            		location.href = "/login.do";
            	}else{
            		alert("예외가 발생했습니다. 관리자에게 문의하세요.");
            		$('.loading-div').hide();
            	}        		
        	}
        }
	});
	
	//20210908 메인 디자인 수정
	//스크롤애니메이션 
	//20210909 통계지도 오류 수정
	if(document.getElementsByClassName('scrollani').length >0 ) {
		var bg = document.getElementsByClassName('scrollani');
		bg[0].style.transform = ("translate3d(0px, 30px, 0px)");
		bg[1].style.transform = ("translate3d(0px, 20px, 0px)");
		bg[2].style.transform = ("translate3d(0px, 15px, 0px)");
		bg[3].style.transform = ("translate3d(0px, 5px, 0px)");
	}

	document.addEventListener('scroll', function() {
		var currentScrollValue = document.documentElement.scrollTop;
		
		bg[0].style.transform = ("translate3d(0px," + (currentScrollValue + 100) + "px, 0px)");
		bg[1].style.transform = ("translate3d(0px," + (currentScrollValue - 20) + "px, 0px)");
		bg[2].style.transform = ("translate3d(0px," + currentScrollValue + "px, 0px)");
		bg[3].style.transform = ("translate3d(0px," + currentScrollValue + "px, 0px)");	
	});

	//20210914 메인 디자인 추가
	var btnLeft =  $('.btn_left');
	var btnRight =  $('.btn_right');
	var $controlbtn =  $('.slide_control_box a');
	var active = $('.detalinum>ul');
	active.li = active.find(">li");
	var cnt =  0;
	var len = active.li.length;

	var $title =  $('.slide_control_title li');
	var $maintitle = $('.left .line span a');


	var noclick = true;
	btnLeft.click(function(){		
		if (noclick) {	
						
			noclick = false;
			if(cnt >= len ){
				cnt = 0;
		    }

    		if(cnt < 0 ){
				cnt = len-1;
		    }
			
		    var preCnt = cnt-1;			
		    if(preCnt < 0){
				preCnt = len-1;
		    }		
		
			$controlbtn.removeClass("on");
			$controlbtn.eq(preCnt).addClass("on");
			$title.removeClass('on');
	    	$title.eq(preCnt).addClass('on');

			active.li.removeClass('ac');

			active.li.eq(cnt).addClass('ac').css("top","0").animate({"top":"100%"},300,"linear",function(){
			 	noclick = true;
			});
			active.li.eq(preCnt).addClass('ac').css("top" , "-100%").animate({"top":"0"},300,"linear");
			cnt--;
		}
	});

	btnRight.click(function(){		
		if (noclick) {
			
			noclick = false;
			if(cnt > len-1){
			 	cnt = 0;
			}
				
			var netxCnt = cnt+1;			
			if(netxCnt > len-1){
				netxCnt = 0;
		    }		

			$controlbtn.removeClass("on");
			$controlbtn.eq(netxCnt).addClass("on");
			$title.removeClass('on');
	    	$title.eq(netxCnt).addClass('on');

			active.li.removeClass('ac');

			active.li.eq(cnt).addClass('ac').css("top","0").animate({"top":"-100%"},300,"linear",function(){
			 	noclick = true;
			});
			active.li.eq(netxCnt).addClass('ac').css("top" , "100%").animate({"top":"0"},300,"linear");
			
			cnt++;
		}
	});

	

	$controlbtn.click(function(){
		var $preindex = $controlbtn.parent().find('.on').index();
		console.log($preindex);
		$controlbtn.removeClass("on");
		$(this).addClass("on");
		var $indexnum = $(this).index();

	    $title.removeClass('on');
	    $title.eq($indexnum).addClass('on');
		
		if($preindex == $indexnum)
		{
			return;
		}
	 	else if($preindex < $indexnum){
			active.li.removeClass('ac');
			active.li.eq($preindex).addClass('ac').css("top","0").animate({"top":"-100%"});
			active.li.eq($indexnum).addClass('ac').css("top","100%").animate({"top":"0"});

		 }
		 else{
			active.li.removeClass('ac');
			active.li.eq($preindex).addClass('ac').css("top","0").animate({"top":"100%"});
			active.li.eq($indexnum).addClass('ac').css("top","-100%").animate({"top":"0"});
		 }
	   

		 cnt = $indexnum;

		
	});
	
	$maintitle.click(function(){
		var $maintitlecnt = $(this).parent().parent().index();
		$controlbtn.eq($maintitlecnt).trigger('click');
			
	});

});

function statMap(indx){
	var form = $("<form>").attr("method","post").attr("action","/system/gis/statMap.do");
	
	form.append($("<input/>",{type:"hidden",name:"indx",value:indx}));
	form.appendTo("body");
	form.submit();
}

function moveToJuso(rownum, rowdata) {
	var form = $("<form>").attr("method","post").attr("action","/system/gis/statMap.do");
	
	form.append($("<input/>",{type:"hidden",name:"reprsntLocplcNm", value:rowdata.reprsntLocplcNm}));
	form.appendTo("body");
	form.submit();
}
