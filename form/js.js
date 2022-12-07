// var masivi = [102,10,49,18,10,59,5];
// console.log(masivi[0]);
// if(masivi.length%2 == 0){
//     console.log(masivi[masivi.length/2-1]);
//     console.log(masivi[masivi.length/2]);
// }else {
//     console.log(masivi[Math.floor(masivi.length/2)])
// }
// console.log(masivi[masivi.length-1]);
//
//
//
// var one = prompt("ასაკი");
// var two = prompt("სქესი");
// if(one >0 && two <18){
//     console.log("ახალგაზრდა")
// }
//
// else if(one < 60){
//     console.log("მოზარდი")
// }
//
// else if(one<59 && two=="ქალი"){
//     console.log("პენსიონერი ქალი")
// }
// else if(one < 65 && two=="კაცი"){
//     console.log("პენსიონერი კაცი")
// }
// else if(one > 64){
//     console.log("ახალგაზრდა")
// }
// else{
//     console.log("არასწორია")
// }
//
// var arr = [ 30, 1, 4, 6, 70, 100, 99, 80, 56, 800,765]
// for(var x of arr){
//     if(x%2==1 && arr[x%2==0]){
//         console.log(arr[x])
//     }
// }

//
// var arr = [35, 56, 789,-45, 700, 456, 54, -9, 456, 30, 68, 900, 350];
// console.log(arr[0]);
// console.log(arr[arr.length-1]);
var gamyopi =0;
var ricxvi = Number(prompt())
for( var i =1; ricxvi<=i; i++){
    if(ricxvi % i==0){
        gamyopi = gamyopi +1;
    }
    if(gamyopi >=2){
        console.log("martivia");
    }
    else {
        console.log("shedgenilia")
    }
}





