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
			var aboutImg = $(".image")

			if(index == 1){
				aboutEl.removeClass("inactive_left"),
				aboutImg.removeClass("inactive_right");
			}
		},

		onLeave: function(index, nextIndex, direction){
			var leavingSection = $(this);
			var aboutEl = $('.row');

			// after leaving section 2
			if(index == 1 && direction =='down'){
				aboutEl.removeClass("hidden2");
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
			$(".text").removeClass("yt_left");              // move text
			$("#celular_left").removeClass("yt_right2");    // move celular left
		setTimeout(function(){
			$("#celular_right").removeClass("yt_right1");   // move celular right
		}, 200)
			$(".yt_button").removeClass("disappear");       // disappear central button
		setTimeout(function(){
			$(".close_button").removeClass("yt_close");     // move cross button
			$(".video").removeClass("hidden7");             // appear yotube video
			$("#row0").removeClass("yt_bottom");            // move playstore button
		}, 800)
		
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
            disablekb: 1
        },
	        	events: {
	            	'onReady': onPlayerReady,
	            	'onStateChange': onPlayerStateChange
	    	    }
	  	    });
	    }


	    function onPlayerReady(event) {  //play and pause youtube video
	        
	        // bind events
	        $("#play_button").click(function(){
	          player.playVideo();
	        });
	        
	        $("#pause_button").click(function(){
	          player.pauseVideo();
	        });
	        
	    }

	          // when video ends
	    function onPlayerStateChange(event) {        
	        if(event.data === 0 || event.data === 2) {            
				$(".video").addClass("hidden7");
				$(".text").addClass("yt_left");
			setTimeout(function(){
				$("#celular_left").addClass("yt_right2");
			}, 200)
				$("#celular_right").addClass("yt_right1");
				$(".yt_button").addClass("disappear");
				$("#row0").addClass("yt_bottom");
				$(".close_button").addClass("yt_close");
	        }

	    }