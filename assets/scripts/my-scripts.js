//initialize order count
var orderCount = 0;

/* array of drink objects
   each object has a value key with a camelCase drink name value 
   and a label key with the display text for the drink */
var cocktails = [
  {
    'value': 'focusedLady',
    'label': 'Focused Lady'
  },
  {
    'value': 'strongLady',
    'label': 'Strong Lady'
  },
  {
    'value': 'frontEndPunch',
    'label': 'Front-End Punch'
  },
  {
    'value': 'cachedOut',
    'label': 'Cached Out'
  },
  {
    'value': 'httPapaya',
    'label': 'httPAPAYA://'
  },
  {
    'value': 'nerdyDaiquiri',
    'label': 'Nerdy Daiquiri'
  },
  {
    'value': 'theAvernaCode',
    'label': 'The Averna Code'
  },
  {
    'value': 'focusedTheMostest',
    'label': 'Focused the Mostest'
  },
];

// loadMenu function to add the drinks from the array to the page
var loadMenu = function() {
  for (var i = 0; i < cocktails.length; i++) {
    $('.checkbox-group').append(
      '<label class="radio" for="' + cocktails[i].value + '"><input type="radio" id="' + cocktails[i].value + '" name="drink" value="' + cocktails[i].value + '">' + cocktails[i].label + '</label>'
    );
  }
};

// submitOrder function that increments orderCount, gathers and displays order details.
var submitOrder = function() {
  orderCount++;
  var orderName = $("#order-form-input").val();
  console.log(orderName);
  var drinkName = $("label[for='" + $("input[type='radio']:checked").attr("id") + "']").text();
  
  // only add the order if a name has been entered
  if (orderName) {
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
  }
  else { // if orderName has no value trigger an alert
    alert('Oops! Please enter your name to order your drink.');
  }
};


$(document).ready(function() {
  // call loadMenu function
  loadMenu();

  $('#order-btn').click(function() {
    // call submitOrder function when order button is clicked
    submitOrder();
  });
});