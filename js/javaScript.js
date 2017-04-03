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
