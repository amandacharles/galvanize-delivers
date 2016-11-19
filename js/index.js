(function() {
  'use strict';

let $total = $('#total');
let $subtotal = $('#subtotal');
let $tax = $('#tax');
let subTotalAmount = 0;

// CLick on Menu Items to update subtotal, tax, and total

$('#menu').on('click', 'a', (event) => {

  let $item = $(event.target);
  let priceValue = $item.attr('value');
  let price = parseFloat(priceValue);

// update subtotal amount

subTotalAmount += price;
$subtotal.text(subTotalAmount)

// update tax amount

let tax = (subTotalAmount * .096).toFixed(2);
$tax.text(tax);

// update total price

let totalPrice = ((parseFloat($subtotal.text())) * 1.096).toFixed(2);
$total.text(totalPrice)

})

$('form').on('click', '.center-btn', (event) => {

});



})();
