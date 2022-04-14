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
function mith(){
    var worlds =[];
    worlds.push(document.getElementById("world-1"));
    worlds.push(document.getElementById("world-2"));
    worlds.push(document.getElementById("world-3"));
    worlds.push(document.getElementById("world-4"));
    showelement(worlds,3,0);
    showelement(worlds,2,3);
    showelement(worlds,1,2);
    showelement(worlds,0,1);

    if (!worlds[0].classList.contains("show") && !worlds[1].classList.contains("show") && !worlds[2].classList.contains("show") &&
        !worlds[3].classList.contains("show")){
        worlds[0].classList.add("show");
    }
}
function showelement(worlds,index,show){
    if(worlds[index].classList.contains("show")){
        worlds[index].classList.remove("show");
        worlds[show].classList.add("show");
    }
}