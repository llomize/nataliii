function my(){
    // document.getElementById("contentId").classList.add("red");
    // document.getElementById("mybutton").innerHTML = "test";

    document.getElementById("contentId").innerHTML = "<div class=\"inp-div\">\n" +
        "        <label>რაოდენობა</label>\n" +
        "        <input class=\"inp\" type=\"text\">\n" +
        "    </div>"+document.getElementById("contentId").innerHTML;
}

function hide(){
    document.getElementById("inp-div").classList.add("hidden");
}
function show(){
    document.getElementById("inp-div").classList.remove("hidden");
}