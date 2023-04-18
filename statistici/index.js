var theParagraph = document.getElementsByClassName("paragraph");
var pHeightTotal = 0;
var lightBulbBck = document.getElementsByClassName("bulb-bck")[0];
for(var i = 0; i<theParagraph.length; i++)
{
    pHeightTotal = pHeightTotal + theParagraph[i].offsetHeight;
    theParagraph[i].style.width = (window.innerWidth - lightBulbBck.offsetWidth) + "px";
}

console.log(pHeightTotal);
var earthImg = document.getElementsByClassName("earth-bck")[0];
earthImg.style.top = (pHeightTotal + earthImg.offsetHeight/3) + "px";
