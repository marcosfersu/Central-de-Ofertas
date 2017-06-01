// full Page

$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});

    $('#fullpage').fullpage({
		sectionsColor: ['black', '#1BBC9B', '#7E8F7C'],
		scrollBar: false,
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Somos más', 'Unite gratis', 'Sumate', 'Recibí', 'Mail',],
		verticalCentered: false,

		afterLoad: function(anchorLink, index){
			var aboutEl = $('#row0');
			var aboutImg = $("#celular_right");
			var aboutImg2 = $("#celular_left");

			if(index == 1){
				aboutEl.removeClass("inactive_left"),
				setTimeout(function(){
					aboutImg.addClass("yt_right1");
				}, 200)
				setTimeout(function(){
					aboutImg2.addClass("yt_right2");
				}, 300)
			}
		},

		onLeave: function(index, nextIndex, direction){
			var leavingSection = $(this);
			var aboutEl = $('.row');

			// after leaving section 2
			if(index == 1 && direction =='down'){
				aboutEl.removeClass("inactive_left");
			}

			// after leaving section 3
			if(index == 2 && direction =='down'){
				aboutEl.removeClass("hidden3");
			}

			// after leaving section 4
			if(index == 3 && direction =='down'){
				aboutEl.removeClass("hidden4");
			}
		}

	});


// YouTube


	$(".yt_button").click(function(){
			$("#celular_left").removeClass("yt_right2");    // move celular left
			$(".yt_button").addClass("disappear");          // disappear central button
			$(".text").removeClass("yt_left");              // move text
		setTimeout(function(){
			$("#celular_right").removeClass("yt_right1");   // move celular right
			$(".background").addClass("inactive")           // disappear background section1
		}, 200)
		setTimeout(function(){
			$(".yt_close_button").removeClass("yt_close");  // move cross button
			$("#row0").removeClass("yt_bottom");            // move playstore button
		}, 600)
		setTimeout(function(){
			$(".yt_video").removeClass("inactive");         // appear yotube video
		}, 1200)
    });

});

    var tag = document.createElement('script')
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


		var player;
	    function onYouTubeIframeAPIReady() {
	        player = new YT.Player('player', {
	       	height: '360',
	        width: '640',
	        videoId: 'HIAMc5pHxcA',
	     playerVars: {
            controls: 0,
            disablekb: 1,
            rel: 0
        },
	        	events: {
	            	'onReady': onPlayerReady,
	            	'onStateChange': onPlayerStateChange
	    	    }
	  	    });
	    }


	    function onPlayerReady(event) {  //play and pause youtube video
	        
			var firts = 1;
	        // bind events
	        $("#play_button").click(function(){
	        
	        if(firts == 1){
	        	player.playVideo();
	        	firts = 0;
	        }

	        if (firts == 0) {
				setTimeout(function(){
	        		player.playVideo();
				}, 700)
			}

	        });
	        
	        $("#pause_button").click(function(){
	          player.pauseVideo();
	        });
	        
	    }

	          // when video ends
	    function onPlayerStateChange(event) {        
	        if(event.data === 0 || event.data === 2) {            
				$(".yt_video").addClass("inactive");
				$("#celular_right").addClass("yt_right1");
				$(".yt_button").addClass("disappear");
				$("#row0").addClass("yt_bottom");
				$(".yt_close_button").addClass("yt_close");
				$(".background").removeClass("inactive")
			setTimeout(function(){
				$("#celular_left").addClass("yt_right2");
			}, 200)
			setTimeout(function(){
				$(".text").addClass("yt_left");
			}, 400)
	        }

	    }