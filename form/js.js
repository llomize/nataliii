var masivi = [102,10,49,18,10,59,5];
console.log(masivi[0]);
if(masivi.length%2 == 0){
    console.log(masivi[masivi.length/2-1]);
    console.log(masivi[masivi.length/2]);
}else {
    console.log(masivi[Math.floor(masivi.length/2)])
}
console.log(masivi[masivi.length-1]);



var one = prompt("ასაკი");
var two = prompt("სქესი");
if(one >0 && two <18){
    console.log("ახალგაზრდა")
}

else if(one < 60){
    console.log("მოზარდი")
}

else if(one<59 && two=="ქალი"){
    console.log("პენსიონერი ქალი")
}
else if(one < 65 && two=="კაცი"){
    console.log("პენსიონერი კაცი")
}
else if(one > 64){
    console.log("ახალგაზრდა")
}
else{
    console.log("არასწორია")
}


