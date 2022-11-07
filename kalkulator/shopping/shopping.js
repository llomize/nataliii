var shoppingarray = [];

function shopping() {
    var dasaxeleba = document.getElementById("select");
    var raodenoba = document.getElementById("input1");
    var pasi = document.getElementById("input2");
    var girebuleba = document.getElementById("input3");
    var shop = new Object();
    shop.name = dasaxeleba.value;
    shop.raod = raodenoba.value;
    shop.price = pasi.value;
    shop.gireb = girebuleba.value;
    shoppingarray.push(shop);
    raodenoba.value = "";
    pasi.value = "";
    girebuleba.value = "";
}
function  girebuleba (){
    var raodenoba = document.getElementById("input1");
    var pasi = document.getElementById("input2");
    var girebuleba = document.getElementById("input3");
    if(raodenoba.value == "" || pasi.value == ""){
        return;
    }
    girebuleba.value = parseInt(raodenoba.value) * parseInt(pasi.value);
}