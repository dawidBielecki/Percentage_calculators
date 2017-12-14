'use strict';
// Pierszwy kalkulator

var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('calculateFunction');

form.addEventListener('submit', function(event){
    
if (!numField1.value || !numField2.value) {
    alert("Uzupełnij puste pola!")
}

else {
    var x = parseFloat(numField1.value);
    var y = parseFloat(numField2.value);
    
    var result = x / y;
    var percent = result * 100;
    
    resultField.value = percent;
    event.preventDefault();
}
});

// drugi kalkulator - Oblicz % z liczby

var numField1v2 = document.getElementById('numField1v2');
var numField2v2 = document.getElementById('numField2v2');
var resultFieldv2 = document.getElementById('resultFieldv2');
var form = document.getElementById('percentOfNumber');

form.addEventListener('submit', function(stop){

if (!numField1v2.value || !numField2v2.value){
    alert("Uzupełnij brakujące pola");
}

else {
    var x = parseFloat(numField1v2.value);
    var y = parseFloat(numField2v2.value);
    
    var result1 = x / 100;
    var realResult = result1 * y;
    
    resultFieldv2.value = realResult;
    stop.preventDefault();
}
});




















