//initialize order count
var orderCount = 0;

/* array of drink objects
   each object has a value key with a camelCase drink name value 
   and a label key with the display text for the drink */

// loadMenu function to add the drinks from the array to the page


// submitOrder function that increments orderCount, gathers and displays order details.
var submitOrder = function() {
  orderCount++;
  var orderName = $("#order-form-input").val();
  console.log(orderName);
  var drinkName = $("label[for='" + $("input[type='radio']:checked").attr("id") + "']").text();
  
  // only add orders if there is room left on the order queue
  if (orderCount <= 5) {
    // add order display
    $("#order-details").append("<h1>" + orderName + " would like a " + drinkName + "</h1>");

    // update drink order count
    $('#drink-count').html("Drinks Ordered: " + orderCount);
  }
  else {
    alert('Drink order queue is full.  Please try ordering again in a few minutes.');
  }
};


$(document).ready(function() {
  // call loadMenu function

  $('#order-btn').click(function() {
    // call submitOrder function when order button is clicked
    submitOrder();
  });
});