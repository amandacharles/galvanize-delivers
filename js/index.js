(function() {
  'use strict';

let $total = $('#total');
let $subtotal = $('#subtotal');
let amount = 0;

$('#menu').on('click', 'a', (event) => {

  let $item = $(event.target);
  let priceValue = $item.attr('value');
  let price = parseFloat(priceValue);

 amount += price;
$subtotal.text(amount)
  console.log(amount);
})




})();
