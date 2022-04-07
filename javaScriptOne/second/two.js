function galeriaa(){
    if(document.getElementById("p1").classList.contains("vis")){
        document.getElementById("p1").classList.remove("vis");
        document.getElementById("p1").classList.add("hid");
        document.getElementById("p2").classList.add("vis");
        return;
    }
    if(document.getElementById("p2").classList.contains("vis")){
        document.getElementById("p2").classList.remove("vis");
        document.getElementById("p2").classList.add("hid");
        document.getElementById("p3").classList.add("vis");
        return;
    }

    if(document.getElementById("p3").classList.contains("vis")){
        document.getElementById("p3").classList.remove("vis");
        document.getElementById("p3").classList.add("hid");
        document.getElementById("p1").classList.add("vis");
    }
}

