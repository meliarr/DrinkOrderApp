// Initialize orderCount variable to 0 (Worksheet Part 1: Count Orders Step 1
var orderCount = 0;
var cocktails = [
	{
    'id': 'focusedLady',
    'label': 'Focused Lady'
  },
  {
    'id': 'strongLady',
    'label': 'Strong Lady'
  },
  {
    'id': 'frontEndPunch',
    'label': 'Front-End Punch'
  },
  {
    'id': 'cachedOut',
    'label': 'Cached Out'
  },
  {
    'id': 'httPapaya',
    'label': 'httPAPAYA://'
  },
  {
    'id': 'nerdyDaiquiri',
    'label': 'Nerdy Daiquiri'
  },
  {
    'id': 'theAvernaCode',
    'label': 'The Averna Code'
  },
  {
    'id': 'focusedTheMostest',
    'label': 'Focused the Mostest'
  },
];
var loadMenu = function () {
	for (var i = 0; i < cocktails.length; i++) {
		$('.radio-group').append('<label class="radio" for="' + cocktails[i].id + '"><input type="radio" id="' + cocktails[i].id + '" name="drink" value="' + cocktails[i].label + '">' + cocktails[i].label + '</label>');
	};
};

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
    fetchGifByOrderName(orderName);
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


var fetchGifByOrderName = function (orderName) {
	var url = `https://api.giphy.com/v1/gifs/random?tag=${orderName}&api_key=75af32d089554f9a9daaac3f290e58fb`;
	fetch(url) // URL of API
		.then(function(response) {
			// Code for processing data response from API to desired data format
      return response.json();
    })
    .then(function(response) {
      // Code for using the data we formatted
      console.log(response);
    })
    .catch(function(error) {
      // Code to run if API returns an error
      console.log(error);
    });
};

$(document).ready(function() {
	loadMenu();

  $('#order-btn').click(function() {
    // call submitOrder function when order button is clicked (Worksheet Part 1: Call the Function, Step 1)
		submitOrder();
  });
});
