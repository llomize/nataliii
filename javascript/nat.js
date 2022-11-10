var bird =[];
function dog (a,b){
    for(var i=a;i<b; i++){
     bird.push(i);
    }
    console.log(bird);
}
function snake (){
    var jami = 0;
    for(var i=0;i<bird.length;i++){
        jami = jami+bird[i];
    }
    console.log(jami);
}
const pig = "skolashi swavlobs";
const cow = "dadis bagshi";
function school (asaki){
    if(asaki<19 && asaki>5){
        return pig;
    }
    else{
       return"ar swavlobs";
    }
}
function bagi(asaki){
    if(asaki<=5 && asaki>1){
        return cow;
    }
    else{
        return"ar dadis";
    }
}
function what(asaki){
    if(school(asaki)== pig){
        console.log("skola");
    }
    if(bagi(asaki)== cow){
        console.log("bagi");
    }
}