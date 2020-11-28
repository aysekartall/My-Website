
/*
function myFunction() {
    document.getElementById("demo").style.backgroundColor = "#074540";
}
*/

        
var btn1=document.querySelector("#demo");

btn1.onclick=function(){
                var kirmizi=Math.floor(Math.random()*255);
    var yesil=Math.floor(Math.random()*255);
    var mavi=Math.floor(Math.random()*255);
    var renk=`rgb(${kirmizi} ,${yesil}, ${mavi})`;
    
    demo.style.background=renk;
}
   

