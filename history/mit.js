function next() {
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var tree = document.getElementById("tree");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    if (one.classList.contains("show")) {
        two.classList.add("show");
        one.classList.remove("show");
        tree.classList.remove("show");
        four.classList.remove("show");
        five.classList.remove("show");
        return;
    }
    if (two.classList.contains("show")) {
        one.classList.remove("show");
        two.classList.remove("show");
        tree.classList.add("show");
        four.classList.remove("show");

        return;
    }
    if (tree.classList.contains("show")) {
        four.classList.add("show");
        one.classList.remove("show");
        two.classList.remove("show");
        tree.classList.remove("show");

        return;
    }
    if (four.classList.contains("show")) {
        four.classList.remove("show");
        five.classList.add("show");

        return;
    }
    if (five.classList.contains("show")) {
        five.classList.remove("show");
        return;
    }
    if (!one.classList.contains("show") && !two.classList.contains("show") &&
        !tree.classList.contains("show") && !four.classList.contains("show") && !five.classList.contains("show")) {
        one.classList.add("show");
    }
}
function pandora(){
    var one = document.getElementById("panone");
    var two = document.getElementById("pantwo");
    var tree = document.getElementById("pantree");
    var four = document.getElementById("panfour");
    var five = document.getElementById("panfive");
    if (one.classList.contains("show")){
        two.classList.add("show");
        one.classList.remove("show");
        return;
    }
    if (!one.classList.contains("show") && !two.classList.contains("show") && !tree.classList.contains("show") &&
        !four.classList.contains("show") && !five.classList.contains("show")){
    one.classList.add("show");
    return;
    }
    if (two.classList.contains("show")) {
        one.classList.remove("show");
        two.classList.remove("show");
        tree.classList.add("show");
        four.classList.remove("show");

        return;
    }
    if(tree.classList.contains("show")){
        tree.classList.remove("show");
        four.classList.add("show");
    }
    if(four.classList.contains("show")){
        four.classList.remove("show");
        five.classList.add("show");
    }
    if(five.classList.contains("show")){
        five.classList.remove("show");
    }

}