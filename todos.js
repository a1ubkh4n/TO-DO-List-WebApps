// check off specific todos by clicking

/*$("li").click(function() {
	console.log($(this).css("color"));
	// if li is gray, turn it black else turn it gray
	if($(this).css("color") === "rgb(128, 128, 128)") {
		console.log("it is currently gray!");
		$(this).css({
		color: "black",
		textDecoration: "none"
	});
	}
	else {
		console.log("it is currently black");
		$(this).css({
		color: "gray",
		textDecoration: "line-through"
	});
	}	
});*/

// Check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event) {
	if(event.which === 13) {

		// Grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");

		// Create a new li and add to ul
		$('ul').append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text'").fadeToggle();
})