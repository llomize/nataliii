function damtavreba(){
    var asaki = document.getElementById("asaki").value;
    var saxeli = document.getElementById("saxeli").value;
    var chaweriliKlasi = document.getElementById("klasi").value;

    var shedegiInputSpilo = document.getElementById("shedegi");

    if(asaki > 18){
        shedegiInputSpilo.value = "თქვენი ასაკი არ შეესაბამება სკოლას";
        shedegiInputSpilo.classList.remove("warmatebit-registracia");
        shedegiInputSpilo.classList.add("warumatebeli");
    }
    else {
        shedegiInputSpilo.value = "თქვენ წარმატებით დარეგისტრირდით";
        shedegiInputSpilo.classList.remove("warumatebeli");
        shedegiInputSpilo.classList.add("warmatebit-registracia");
    }
    //
    // var unda = asaki - 5 ;
    // if(unda != chaweriliKlasi){
    //     alert("არასწორად მიუთითე კლასი");
    // }
    //

    if (chaweriliKlasi >12) {
        alert("incorrect");
    }
    if(chaweriliKlasi<1)
        alert("no");
}