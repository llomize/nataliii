function change(){
    var input1 = document.getElementById("htmlone");
    var input2 = document.getElementById("htmltwo");
    var saveinput1 = input1.value;
    input1.value = input2.value;
    input2.value = saveinput1;
}