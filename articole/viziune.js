var option = document.getElementsByClassName("p-sec");

for(var i = 0; i<option.length; i++)
{
    var x = 200;

    option[i].style.setProperty("--color", "rgb(" + Math.floor(Math.random() * x) + ", " + Math.floor(Math.random() * x) + ", " + Math.floor(Math.random() * x) + ")");
}
