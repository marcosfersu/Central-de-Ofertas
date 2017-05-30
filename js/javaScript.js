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
			var aboutEl = $('.row');
			var aboutImg = $(".image")

			if(index == 1){
				aboutEl.removeClass("hidden1"),
				aboutImg.removeClass("hidden3");
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

	// 	$(".bottomVideo").click(function(){
	// 			$(".row").removeClass("videoLeft");
	// 			$(".image").removeClass("videoRight");
	// 			$(".video").removeClass("hidden5");
	// 			$(".video").append('<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/HIAMc5pHxcA?rel=0&autoplay=1&amp;controls=0&amp;showinfo=0?ecver=1" frameborder="0" allowfullscreen></iframe>');
	// 			$(".bottomVideo").removeClass("none");
	// 	});

	// });


// YouTube

	$(".bottomVideo").click(function(){
			$(".row").removeClass("videoLeft");
			$(".image").removeClass("videoRight");
			$(".bottomVideo").removeClass("none");
		setTimeout(function(){
			$(".video").removeClass("hidden7");
		}, 900)
		
//			$(".video").append('<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/HIAMc5pHxcA?rel=0&autoplay=1&amp;controls=0&amp;showinfo=0?ecver=1" frameborder="0" allowfullscreen></iframe>');

    });

});

      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);




var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '360',
          width: '640',
          videoId: 'HIAMc5pHxcA',
          events: {
            'onReady': onPlayerReady,
          }
        });
      }


      function onPlayerReady(event) {
        
        // bind events
        var playButton = document.getElementById("play-button");
        playButton.addEventListener("click", function() {
          player.playVideo();
        });
        
        var pauseButton = document.getElementById("pause-button");
        pauseButton.addEventListener("click", function() {
          player.pauseVideo();
        });
        
      }