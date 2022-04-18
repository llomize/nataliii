function show(click) {
    var inputvar = document.getElementById("input").value;
    var number = click.innerText;
    if (number == "+"||number == "-" || number =="*" || number=="/") {
        document.getElementById("input1").value = number;
    } else {
        if(document.getElementById("input1").value==""){
            document.getElementById("input").value = inputvar + number;
        }
        else {
            document.getElementById("input2").value= document.getElementById("input2").value+number;
        }

    }
}

