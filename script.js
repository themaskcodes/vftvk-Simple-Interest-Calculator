function compute(){
var p = document.getElementById("principal").value
p = document.getElementById("principal").value



    var principal=document.getElementById("principal").value
    p = document.getElementById("principal").value;
    
    var rate=document.getElementById("rate").value
    r = document.getElementById("rate").value

    var years=document.getElementById("years").value
    y = document.getElementById("years").value

    var interest = principal * years * rate/100
    var year = new Date().getFullYear()+parseInt(years);

document.getElementById("result").innerHTML="If you deposit"
document.getElementById("answerOne").innerHTML=p
document.getElementById("paragraphOne").innerHTML=",<br>at an interest rate of "
document.getElementById("answerTwo").innerHTML=r+"%"
document.getElementById("paragraphTwo").innerHTML=".<br>You will receive an amount of"
document.getElementById("answerThree").innerHTML=interest
document.getElementById("paragraphThree").innerHTML="in the year "
document.getElementById("answerFour").innerHTML=year





if(p<=0){
alert("Enter a positve number")
document.getElementById("principal").focus()
}




}


function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
 
