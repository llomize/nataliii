var shoparray = [];

function buy(){
   var shop1 = document.getElementById("dasaxeleba");
   var shop2 = document.getElementById("raodenoba");
   var shop3 = document.getElementById("pasi");
   var shop4 = document.getElementById("girebuleba");

    var shop = new Object();
    shop.name = shop1.value;
    shop.price = shop2.value;
    shop.cuant = shop3.value;
    shop.pasi2 = shop4.value;
    shoparray.push(shop);


    shop2.value = "";
    shop3.value = "";
    shop4.value = "";
}
function  girebuleba(){
    var shop2 = document.getElementById("raodenoba");
    var shop3 = document.getElementById("pasi");
    var shop4 = document.getElementById("girebuleba");

    if (shop2.value == ""  || shop3.value == ""){
        return;
    }

   shop4.value = parseInt(shop2.value)*parseInt(shop3.value);

}