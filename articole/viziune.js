var option = document.getElementsByClassName("p-sec");

for(var i = 0; i<option.length; i++)
{
    var x = 200;

    option[i].style.setProperty("--color", "rgb(" + Math.floor(Math.random() * x) + ", " + Math.floor(Math.random() * x) + ", " + Math.floor(Math.random() * x) + ")");
}

var pSecs = document.getElementsByClassName("p-sec");
var theTop = 0;

for(var i = 0; i<pSecs.length - 1; i++)
{
    theTop += pSecs[i].offsetHeight;
}

var theStickMan = document.getElementsByClassName("stick")[0];
theStickMan.style.top = theTop + "px";