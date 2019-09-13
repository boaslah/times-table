var num = document.getElementById('num');
var result = document.getElementById("result");

function timesTable () {
        if (num.value == 0){
                alert("Please enter a valid numner");
        } else if (num.value != 0){
                for (i=1; i < 13; i++){
                        result.innerHTML +=
                        "<td>"+ num.value + "</td>"+  
                         "<td>"+" X " + "</td>"+ 
                         "<td>"+ i + "</td>" +
                         "<td>"+ " = " + "</td>"+
                         "<td>" + i*num.value  + "</td>";
                }
        }
        num.value = " "
}

function clare() {
        result.innerHTML = " ";
}

function enter() {
        if(event.keyCode == 13)
        {
                timesTable();
        }
}