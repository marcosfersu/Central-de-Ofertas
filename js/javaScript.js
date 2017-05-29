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

    // var aboutEl = $('.image');
    // var aboutElOffset = aboutEl.offset().top/1.1;
    // var documentEl = $(document);
    // documentEl.on('scroll', function() {
    //     if( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden')){
    //     aboutEl.removeClass("hidden")}
    // });
});




// animate - section1
