// changing HTML element
var txt1 = document.getElementById("js_test");
txt1.innerHTML = "This place ain't the end of me";


// adding event listeners
//document.getElementById("baloon_img").addEventListener("click", showYourself);
document.getElementById("careful").addEventListener("mouseover", showYourself);


// functions
// Show your real you: switching between your light and dark side
function showYourself(){
    var docList = document.getElementsByClassName("drunk");
    var x;
    for(x of docList)
        x.style.fontFamily = "Sad_jane";

    var elem = document.getElementById("baloon_img");
    var orig_style = document.getElementById("baloon_img").style;
    var count = 0;
    var id = setInterval(invert, 200);
        function invert(){
            if (count % 2 == 0 && count < 350)
                elem.style.filter="invert(100%)";
            else
                elem.style=orig_style;
            count++;
        }    
}

function myMessage() {
    alert("WARNING: This website may potentially trigger seizures for people with photosensitive epilepsy. Viewer discretion is advised.");
  }
