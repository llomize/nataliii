function cl(){
    var input1 = document.getElementById("one");
    var input2 = document.getElementById("two");
    var input3 = document.getElementById("tree");
    var input4 = document.getElementById("four");
    var input5 = document.getElementById("five");
    if(input1.value == "") {
        alert("დაწერეთ თქვენი სახელი");
        return;
    }
    if(input2.value == ""){
        alert("lastname");
        return;
    }
    if(input3.value == ""){
        alert("how old are you");
        return;
    }
    if(input4.value == ""){
        alert("e-mail");
        return;
    }
    if(input5.value == ""){
        alert("password");
        return;
    }


    alert("seccess");

}