var registraciebi = [];
function cl() {
    var input1 = document.getElementById("one");
    var input2 = document.getElementById("two");
    var input3 = document.getElementById("tree");
    var input4 = document.getElementById("four");
    var input5 = document.getElementById("five");
    // if (input1.value == "") {
    //     alert("დაწერეთ თქვენი სახელი");
    //     return;
    // }
    // if (input2.value == "") {
    //     alert("lastname");
    //     return;
    // }
    // if (input3.value == "") {
    //     alert("how old are you");
    //     return;
    // }
    // if (input4.value == "") {
    //     alert("e-mail");
    //     return;
    // }
    // if (input5.value == "") {
    //     alert("password");
    //     return;
    // }
    //
    //
    // if (!input4.value.includes("@")) {
    //     alert("check");
    // }
    // alert("seccess");
    // if(input3.value){
    //
    // }
    // if(parseInt(input3.value)<5 || parseInt(input3.value)>18) {
    //     alert("სწორად შეიყვანეთ ასაკი");
    //
    // }

    var registracia = new Object();
    registracia.saxeli = input1.value;
    registracia.gvari = input2.value;
    registracia.asaki = input3.value;
    registraciebi.push(registracia);
    input1.value = "";


}

function dabechdva(){
    var index = 0;
    var textarea = document.getElementById("result");
    var result = "";
    while(index<registraciebi.length){
        result = result+index+") saxeli: "+registraciebi[index].saxeli+"\n";
        index = index+1;
    }
    textarea.value = result;
}
function axali(){
    var jami =0;
    var div = document.getElementById("cont");
    var buttons = [];
    buttons.push('nata');
    buttons.push('lasha');
    buttons.push('mariami');

    for(var i = 0; i<buttons.length; i++ ){
       div.innerHTML = div.innerHTML + "<button>"+buttons[i]+"</button> ";
    }


}
