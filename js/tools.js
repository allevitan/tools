window.index=0

$(document).ready(function(){
    counterify();
});

function counterify(){
    $('#counter-form').submit(function(e){
	if (e.preventDefault){
	    e.preventDefault();
	}
	var thing = $(this).serializeArray()[0].value
	if ($.trim(thing) == ''){return false;}
	$(this).after('<div class="counter" id="'+window.index+'"><h4>'+thing+'</h4><div class="count-up">+1</div><div class="display">0</div><div class="reset">Reset</div></div>');
	$(this)[0].reset();
	counter = $('#'+window.index);
	counter.children('.count-up').click(function(){
	    display = $(this).siblings('.display');
	    display.text(parseInt(display.text())+1);
	});
	counter.children('.reset').click(function(){
	    $(this).siblings('.display').text(0);
	});
	
	window.index = window.index + 1;

	return false;
    });
}
