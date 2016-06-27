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

var loadMenu = function() {
  for (var i = 0; i < cocktails.length; i++) {
    $('.checkbox-group').append(
      '<label class="checkbox" id="' + cocktails[i].value + '"><input type="checkbox" value="' + cocktails[i].value + '">' + cocktails[i].label + '</label>'
    );
  }
};

//get drinks-data via ajax?

$(document).ready(function() {
  loadMenu();

	$('.bxslider').bxSlider({
	  mode: 'vertical',
	  captions: true,
	  slideWidth: 500
	});

	$('#show-menu-btn').click(function () {
    $('#menu').show();
  });

  $('#hide-menu-btn').click(function () {
    $('#menu').hide();
  });

  //CSS highlight class can be found in assets/styles/main.css
  $('input[type="checkbox"]').click(function(){
    $(this).parent().toggleClass('highlight'); 
  });

  $('#order-btn').click(function() {
    var orderName = $("input:radio:checked").val();
    if (orderName) {
      $('#order-details').html("<h1>" + orderName + "'s order is ready!</h1>");
    }
    else {
      alert('Oops! Please select your name to order your drink.');
    }
  });
});

var submitOrder = function() {
  var orderName = $("input:radio:checked").val();
  $('#order-details').html("<h1>" + orderName + "'s order is ready!</h1>");
};

// 'Thank you, '+ name + ' for ordering ' + drinks + '. We'll let you know when your drink(s) is/are ready!'
