// Initialize orderCount variable to 0 (Worksheet Part 1: Count Orders Step 1
var orderCount = 0;

/**
* submitOrder Function
*
* Increment orderCount, gather and display order details.
* The code from the Worksheet Part 1 Submit an Order Step 2 should go on the line just below the comment close.
*/
var submitOrder = function () {
	orderCount++;
	var orderName = $("#order-form-input").val();
	console.log(orderName);
	var drinkName = $("input[type='radio']:checked").val();
	if(orderCount <= 5) {
		$("#order-details").append("<h1>" + orderName + " would like a " + drinkName + "</h1>");
	} else {
		alert("Drink order queue is full. Please try ordering again in a few minutes.");
	}
	updateOrderCount(orderCount);
};

/**
* updateOrderCount Function
*
* Displays number of drinks currently in the order queue.
* @param {number} count - counter for orders
* The code from the Worksheet Part 1: Count Orders, Step 4 should go on the line just below the comment close.
*/
var updateOrderCount = function (count) {
	$('#drink-count').html("Drinks Ordered: " + count);
};

$(document).ready(function() {

  $('#order-btn').click(function() {
    // call submitOrder function when order button is clicked (Worksheet Part 1: Call the Function, Step 1)
		submitOrder();
  });
});
