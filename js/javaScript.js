// full Page

$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
});


		$(document).ready(function() {
			$('#fullpage').fullpage({
				sectionsColor: ['black', '#1BBC9B', '#7E8F7C'],
				scrollBar: false,
				navigation: true,
				navigationPosition: 'right',
				navigationTooltips: ['Somos más', 'Unite gratis', 'Sumate', 'Recibí', 'Mail',],
				verticalCentered: false,
			});
		});




// animate - section0


(function() {

	var aboutEl = $('div.image'),
	//	aboutElOffset = aboutEl.offset().top/1.1,
	//	aboutElOffset = aboutEl.offset(),
		documentEl = $(document);

		documentEl.on('scroll', function() {
			if( aboutEl.hasClass('hidden')) aboutEl.removeClass('hidden')
		});

})();


// animate - section1

(function() {

	var aboutEl = $('div.row'),
		aboutElOffset = aboutEl.offset().top/1.1,
		documentEl = $(document);

		documentEl.on('scroll', function() {
			if( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden')) aboutEl.removeClass("hidden")
		});

})();