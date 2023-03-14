//Get bill and tip value

//get tip value in taka

//make submit button function

//get total bill



var bill = document.querySelector('#bill');

var tip = document.querySelector('#tip');

var tip_amount_value = document.querySelector('#tip_amount');

var total = document.querySelector('#total_bill');

var btn = document.querySelector('#btn');
var drop = document.querySelector('#drop');

btn.addEventListener('click', function() {

  var tip_amount = bill.value * (tip.value / 100);

  total_amount = parseFloat(bill.value) + parseFloat(tip_amount);


  if (drop.className === 'hidden') {
    drop.classList.remove('hidden');
  }
  else {
    drop.classList.add('hidden');
  }
  tip_amount_value.value = tip_amount;
  total.value = total_amount;

});