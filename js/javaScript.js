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
		onLeave: function(index, nextIndex, direction){
			var leavingSection = $(this);
			var aboutEl = $('.row');

			//after leaving section 2
			if(index == 1 && direction =='down'){
				aboutEl.removeClass("hidden");
			}

			else if(index == 2 && direction == 'up'){
				aboutEl.removeClass("hidden");
			}
		}
	});

    // var aboutEl = $('.image');
    // var aboutElOffset = aboutEl.offset().top/1.1;
    // var documentEl = $(document);
    // documentEl.on('scroll', function() {
    //     if( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden')){
    //     aboutEl.removeClass("hidden")}
    // });
});




// animate - section1
