$(document).ready(function() {
	$('button').click(function(e) {
		$(this).hide();
		$('p.instructions').show();
		
		$('.correct').click(function(e) {
			deleteCurrentMessage(this);
			$('p.correct').show();
			$('.image').unbind('click');
		});
		
		$('.image').not('.correct').click(function(e) {
			deleteCurrentMessage(this);
			$('p.wrong').show();
		});
	});
});

function deleteCurrentMessage(elem) {
	$('.selected').toggleClass('selected');
	$(elem).toggleClass('selected');
    $('p.message').hide();
}