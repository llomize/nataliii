function show(click) {
    var inputvar = document.getElementById("input").value;
    var number = click.innerText;
    if (number == "+"||number == "-" || number =="*" || number=="/") {
        document.getElementById("input1").value = number;
    }else if(number=="X"){
        document.getElementById("input").value = "";
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
    }
    else if(number=="="){
        var moqmedeba = document.getElementById("input1");
        var pirveli_ricxvi = document.getElementById("input");
        var meore_ricxvi = document.getElementById("input2");

        if(moqmedeba.value == "+"){
            var pirveli_ricxvi_rogorc_ricxvi = parseInt(pirveli_ricxvi.value);
            pirveli_ricxvi.value = pirveli_ricxvi_rogorc_ricxvi + parseInt(meore_ricxvi.value);
            moqmedeba.value = "";
            meore_ricxvi.value = "";
        } else if(moqmedeba.value == "-"){
            pirveli_ricxvi.value = parseInt(pirveli_ricxvi.value)  - parseInt(meore_ricxvi.value);
            moqmedeba.value ="";
            meore_ricxvi.value = "";
        }
        else if(moqmedeba.value == "*"){
            pirveli_ricxvi.value = parseInt(pirveli_ricxvi.value) * parseInt(meore_ricxvi.value);
            moqmedeba.value ="";
            meore_ricxvi.value ="";
        }
        else if(moqmedeba.value =="/"){
            pirveli_ricxvi.value = parseFloat(pirveli_ricxvi.value) / parseFloat(meore_ricxvi.value);
            moqmedeba.value = "";
            meore_ricxvi.value = "";

        }
    }
    else {
        if(document.getElementById("input1").value==""){
            document.getElementById("input").value = inputvar + number;
        }
        else {
            document.getElementById("input2").value = document.getElementById("input2").value+number;
        }

    }

}

