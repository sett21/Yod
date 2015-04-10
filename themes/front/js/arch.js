var loadArch = false, loadDesign = false, loadAll = false;
var relativeX, relativeY;
/*
	Document Ready function
*/
function changeHeightFolio(){
	var totalHeight = $(window).height();
	var thisHeight =  totalHeight / 3; 
	var liEl = $('.port-container .cbp-rfgrid > li');
	liEl.css('height', thisHeight);
}
function changeHeightCommand(){
	var totalHeight = $(window).height();
	var thisHeight = totalHeight / 2; 
	var liEl = $('.cbp-rfgrid.command > li');
	liEl.css('height', thisHeight);
}


function getFolioArch(folio){
	if (!loadArch){
		loadArch = true;
		$.ajax({
				url: "/site/getarch/",
				dataType: "json",
				success: function(data){
					$('.loading').slideUp(300);
					var result = data.data;
					$('#fpreview').tmpl(result).appendTo('#architecture .port-container .cbp-rfgrid');
					location.hash = "#page-1/architecture";
					$.fn.fullpage.setAllowScrolling(false);
					changeHeightFolio();
					setTimeout(function(){
						$.fn.fullpage.reBuild();
					}, 200);
				},
				error:function(){
					alert("Error");
				}
			});
	} else{
		$('.loading').slideUp(300);
		location.hash = "#page-1/architecture";
		$.fn.fullpage.setAllowScrolling(false);
	}
}
function getFolioDesign(folio){
	if (!loadDesign){
		loadDesign = true;
		$.ajax({
				url: "/site/getdesign/",
				dataType: "json",
				success: function(data){
					$('.loading').slideUp(300);
					var result = data.data;
					$('#fpreview').tmpl(result).appendTo('#design .port-container .cbp-rfgrid');
					location.hash = "#page-1/design";
					$.fn.fullpage.setAllowScrolling(false);
					changeHeightFolio();
					setTimeout(function(){
						$.fn.fullpage.reBuild();
					}, 200);
				},
				error:function(){
					alert("Error");
				}
			});
	} else{
		$('.loading').slideUp(300);
		location.hash = "#page-1/design";
		$.fn.fullpage.setAllowScrolling(false);
	}
}
function getFolioAll(folio){
	if (!loadAll){
		loadAll = true;
		$.ajax({
				url: "/site/getportfolio/",
				dataType: "json",
				success: function(data){
					$('.loading').slideUp(300);
					var result = data.data;
					$('#fpreview').tmpl(result).appendTo('#all-works .port-container .cbp-rfgrid');
					location.hash = "#page-1/all-works";
					$.fn.fullpage.setAllowScrolling(false);
					changeHeightFolio();
					setTimeout(function(){
						$.fn.fullpage.reBuild();
					}, 200);
				},
				error:function(){
					alert("Error");
				}
			});
	} else{
		$('.loading').slideUp(300);
		location.hash = "#page-1/all-works";
		$.fn.fullpage.setAllowScrolling(false);
	}
}


$(function (){
	var indexPage = "", 
		textAbout = $('#page2 .text-ab'),
		mainVideo = $('#video')[0],
		menuTrigger = $('#menu-trigger'),
		mainMenuContainer = $('.nav'),
		mainMenuItem = $(".cl-effect-2 a"),
		logo = $('.logo');
		trig = false;
	changeHeightCommand();

	// $('.cbp-rfgrid').on('click','figcaption',function(){
	// 	console.log('message');
	// 	document.location.href = "item.html";
	// });

	$(window).on('resize', function(){
		changeHeightCommand();
		changeHeightFolio();
	});

	$('#fullpage').fullpage({
		scrollOverflow: true,
		css3: true,
		scrollingSpeed: 300,
		easingcss3: 'linear',
		easing: 'easeInOutCubic',
		anchors: ['page-1','page-2','page-3','page-4'],
		menu: '#mainMenu',
		afterRender: function(){
			mainVideo.play();
		},
		onLeave: function(index, nextIndex, direction){
			if(index === 1 || index === 3){
			 	mainVideo.pause();
			}
		},
		afterLoad: function(anchorLink, index){
			if(index == 2){
				textAbout.addClass('active');
			}
			if(index == 1){
				mainVideo.play();
			}
		},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
			if(index == 2 && slideIndex == 2){
				//$.fn.fullpage.setAllowScrolling(false);
			}
		},
        onSlideLeave: function(anchorLink, index, slideIndex, direction){
        	if(index == 2 && slideIndex == 2){
				$.fn.fullpage.setAllowScrolling(true);
			}
        }
	});
/* 
	Navigation
*/
	menuTrigger.on('click',function() {
		if (!trig){
			$(this).addClass('active');
			mainMenuContainer.addClass('active');
			trig = true;
			logo.removeClass('anim-logo');
			//logo.fadeOut(300,0);
			logo.addClass('hide');
			logo.removeClass('show');
			$.fn.fullpage.setAllowScrolling(false);
		} else {
			$(this).removeClass('active');
			mainMenuContainer.removeClass('active');
			trig = false;
			$.fn.fullpage.setAllowScrolling(true);
			logo.addClass('show');
			logo.removeClass('hide');
		}
	});
	
	mainMenuItem.on("click", function(event){
		logo.removeClass('hide');
		$.fn.fullpage.setAllowScrolling(true);
		if ($(this).attr('id') === 'm4'){
			$.fn.fullpage.setAllowScrolling(false);
			event.preventDefault();
			$('.loading').slideDown(300);
			getFolioArch();
			
		}
		if ($(this).attr('id') === 'm5'){
			$.fn.fullpage.setAllowScrolling(false);
			event.preventDefault();
			$('.loading').slideDown(300);
			getFolioDesign();
			
		}
		setTimeout(function(){
			trig = false;
			menuTrigger.removeClass('active');
			mainMenuContainer.removeClass('active');
		}, 1000);
	});

	 $('.port-container').on("click",".img-lnk",function(event){
	 	event.preventDefault();
	 	$('.loading').slideDown(300);
	 	setTimeout(function(){
	 		window.location = "item.html";
	 	});
	 });

	$('.triger-down').on('click', function(){
		$.fn.fullpage.moveSectionDown();
	});
	 
});

$('.all-works').on('click', function(event){
	event.preventDefault();
	getFolioAll();
});	

/*++++++++++++++++++++++++++++++++++++++++
	On load function
++++++++++++++++++++++++++++++++++++++++*/




$(window).load(function () {
	
	

	var svgobject = document.getElementById('svgmap'),
		splashText = $("#os-phrases > h2");



	if ('contentDocument' in svgobject) {
		var svgdom = $(svgobject.contentDocument);
		var mapTxt = $('#map-txt');
	}
	$(svgdom).mousemove(function(e) {
			relativeX = (e.pageX);
	    	relativeY = (e.pageY);
	    	mapTxt.css({
				left: (relativeY - 20),
				left: (relativeX + 20)
			});
	   	});

	$(".st0.active", svgdom).hover(function(){
		var _this = $(this);
		//$(this, svgdom).myAddClass('active');
		//console.log(_this.attr('id'));
		

		if (_this.attr('id') == "el1"){
			_this.attr('r', 4);
			mapTxt.text('New York').addClass('show').css({
				top: relativeY-15,
				left: (relativeX + 10)
			});
			console.log('x:'+relativeX+' y:'+relativeY);
		} else if (_this.attr('id') == "el2"){
			_this.attr('r', 4);
			$('#el2-2').css('opacity', '1');
			mapTxt.text('Miami').addClass('show').css({
				top: relativeY-15,
				left: (relativeX + 10)
			});
			console.log('x:'+relativeX+' y:'+relativeY);
		} /*else if (_this.attr('id') == "el3"){
			_this.attr('r', 4);
			mapTxt.text('Ierusalim').addClass('show').css({
				top: relativeY-15,
				left: (relativeX + 10)
			});
			console.log('x:'+relativeX+' y:'+relativeY);
		}*/ else if (_this.attr('id') == "el4"){
			_this.attr('r', 4);
			mapTxt.text('Kiev').addClass('show').css({
				top: relativeY-15,
				left: (relativeX + 10)
			});
			console.log('x:'+relativeX+' y:'+relativeY);
		} else if (_this.attr('id') == "el5"){
			_this.attr('r', 4);
			mapTxt.text('Moskow').addClass('show').css({
				top: relativeY-15,
				left: (relativeX + 10)
			});
			console.log('x:'+relativeX+' y:'+relativeY);
		} else if (_this.attr('id') == "el7"){
			_this.attr('r', 4);
			mapTxt.text('Panama').addClass('show').css({
				top: relativeY-15,
				left: (relativeX + 10)
			});
			console.log('x:'+relativeX+' y:'+relativeY);
		}/*else if (_this.attr('id') == "el6"){
			_this.attr('r', 4);
			mapTxt.text('Kuweit').addClass('show').css({
				top: relativeY-15,
				left: (relativeX + 10)
			});
			console.log('x:'+relativeX+' y:'+relativeY);
		}*/

	}, function(){
	   var _this = $(this);
	   _this.attr('r', 3);
	   //elativeX = elativeY = 0;
	   mapTxt.text('').removeClass('show');
	});

	/* ---- Переход на портфолио ---- */
	if (location.hash == "#page-1/architecture"){
		getFolioArch();
	}
	if (location.hash == "#page-1/design"){
		getFolioDesign();
	}
	if (location.hash == "#page-1/all-works"){
		getFolioAll();
	}

	$('.loading').slideUp(300);
	splashText.lettering('words').children("span").lettering().children("span").lettering(); 
	$('.logo').addClass('active');
});


	
