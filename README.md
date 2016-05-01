# Learning jQuery

## Overview

We're going to use jQuery to add some functionality to our order form on our Drink order application, and implement plugins to make our site look nice. Be sure to look through the examples in the linked documentation and try to figure it out on your own! You can also refer back to examples from the presentation

### Using jQuery to Manipulate our form


First, you'll need to include links to the jQuery library and your scripts files on the index.html. Remember, order matters! You'll be adding jQuery code to your my-scripts.js file. 
[hint](https://api.jquery.com/ready/)


1. Make clicking the "Show Menu" button show the hidden menu div. [hint](http://api.jquery.com/show/)
2. Make clicking the "Hide Menu" button hide the now showing menu div. [hint](http://api.jquery.com/hide/)
3. Make clicking any checkbox turn the background of the label element to a color of your choice. We have a highlight CSS class all set up for you in assets/styles/main.css Feel free to change the color it turns if you'd like! [hint](http://api.jquery.com/toggleclass/)
4. BONUS CHALLENGE: Make clicking the "Order" button get the value from the name input and display it in the #orderDetails div inside an 'h1' tag as "{{name}}'s order is ready". There are a couple different ways to accomplish this, is [append](http://api.jquery.com/append/) or [html](http://api.jquery.com/html/) the better choice and why? [hint](http://api.jquery.com/val/) 

### Adding Plugins

We're going to add a [slider](http://bxslider.com/) to our page to showcase our amazing menu items. Checkout the "add-slider" branch from this repo, we'll do our work in there. Feel free to look through the answers to the previous tasks as well. 

1. Add the required files for [BX Slider](http://bxslider.com/) to your index.html.  Find the BX Slider files you'll need in assets/lib/jquery.bxslider
2. Call the BX Slider on your slider element. 
3. Change the mode of the slider to 'vertical'. [hint](http://bxslider.com/examples/vertical-slideshow)
4. Add captions to your images. [hint](http://bxslider.com/options)