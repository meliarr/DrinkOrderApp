$(document).ready(function() {
	$('#show-menu-btn').click(function () {
		$('#menu').show();
	});

	$('#hide-menu-btn').click(function () {
		$('#menu').hide();
	});

	//CSS highlight class can be found in assets/styles/main.css
	$('.checkbox-group').on('click', 'input:checkbox', function () {
    console.log(this.checked);
	 	$(this).parent().toggleClass('highlight'); 
  });

 	$('#order-btn').click(function() {
 		var orderName = $("input:radio:checked").val();
 		$('#order-details').html("<h1>" + orderName + "'s order is ready!</h1>");
 	});

});