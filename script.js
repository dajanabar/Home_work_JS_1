function calcPercentage(){
  var x, y, tips;
  x = document.getElementById('check').value;
  y = document.getElementById('percentage').value;

if ((x == "") || (y == "")){
    alert("Please enter the value!");
} else if ((isNaN ( x )) || (isNaN ( y )) ) {
    alert("Please enter a number not a text");
} else if ( (x < 0 || x > 1000000) || (y < 0 || y > 100)) {
    alert("Please input correct values. Check can not be greater than 1 000 000. Percentage should be less then 100%!");

} else {
     document.getElementById("check_number").innerHTML = x +"$";
     document.getElementById("tip").innerHTML = "Tip: " + y + "%";
     tips = (x*y)/100;
     document.getElementById("tip_amount").innerHTML = "Tip amount: " + tips +"$";
     res = Number(tips) + Number(x);
     document.getElementById("total_sum").innerHTML = "Total sum to pay: " + res +"$";
}
}
