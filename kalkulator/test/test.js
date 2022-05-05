function change(){
    var input1 = document.getElementById("htmlone");
    var input2 = document.getElementById("htmltwo");
    var saveinput1 = input1.value;
    input1.value = input2.value;
    input2.value = saveinput1;
}
function change2(){
    var input1 = document.getElementById("id1");
    var input2 = document.getElementById("id2");
    var input3 = document.getElementById("id3");
    var saveid1= input2.value;
    input2.value = input1.value;
    input1.value = input3.value;
    input3.value = saveid1;
}