function calcPercentage(){
  var x, y, tips;
  x = document.getElementById('check').Value;
  y = document.getElementById('percentage').Value;
  tips = document.getElementById('tips').Value;
}
if ( (x < 0) || (y < 0) ){
   document.getElementById('jsNegativeValue', 'jsNegativeValue2').innerHTML = '<p>*value is less than zero!"</p>';
} else if (typeof (isNaN ( x )) || typeof (isNaN ( y )) ) {
    document.getElementById('jsNegativeValue', 'jsNegativeValue2').innerHTML = '<p>*please enter a number not a text</p>';
} else if ( (typeof (x) == undefined ) || (typeof (y) == undefined )) {
    document.getElementById('jsNegativeValue', 'jsNegativeValue2').innerHTML = '<p>*please enter the value</p>';
} else {
    // document.getElementById("check").innerHTML = "Check number: " + x +"$";
    // document.getElementById("percentage").innerHTML = "Tip: " + y + "%";
    // tips = (x*y)/100;
    // document.getElementById("tips").innerHTML = "Tip amount: " + tips +"$";
    // res = Number(tips) + Number(x);
    // document.getElementById("sum").innerHTML = "Total num to pay: " + res +"$";
}

}
