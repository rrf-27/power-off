function reverseSlfWriting(el, time)
{
    var copie = el.innerHTML;
    function rdis(i)
    {
        copy = copie;
        if(i>=0)
        {
            el.innerHTML = copie.slice(0, i);
            i--;
            setTimeout(() => {
                rdis(i);
            }, time);
        } else return 0;
    }
    rdis(copie.length + 1);
}

function selfWriting(el, time)
{
    var copie = el.innerHTML;
    el.innerHTML = "";
    function dis(i)
    {
        copy = copie;
        if(i<=copie.length)
        {
            el.innerHTML = copie.slice(0, i);
            i++;
            setTimeout(() => {
                dis(i);
            }, time);
        } else return 0;
    }
    dis(0);
}

var heiTxt = document.getElementsByClassName("txt")[0];
l = heiTxt.length;

function getLen(el)
{
    var copie = el + "";
    
    return copie.length;
}


function repeatWriting(time)
{
    
    var a = time*getLen(heiTxt);
    selfWriting(heiTxt, time);
    setTimeout(() => {
        reverseSlfWriting(heiTxt, time);
        setTimeout(() => {
            heiTxt.innerHTML = "Meet the team!";
            selfWriting(heiTxt, time);
        }, a-100);
    }, a);
}
repeatWriting(100);


var theBody = document.body;
var theFoot = document.getElementById("foot");
var theNav = document.querySelector("nav");
var theContent = document.querySelector("main");

var footDistToTop = window.innerHeight - theFoot.offsetHeight - theContent.offsetHeight - theNav.offsetHeight;

if(footDistToTop > 0) theFoot.style.top = footDistToTop + "px";