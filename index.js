alert("Site-ul nu este terminat!");

theBall = document.getElementsByClassName("ball")[0];
var init = theBall.offsetTop;


var ballHeight = theBall.offsetHeight;
var ballPlaceHeight = document.getElementsByClassName("ball-place")[0].offsetHeight;



var foot = document.getElementById("foot");

var menuOptionWidth = document.getElementsByClassName("menu-option");
document.getElementById("menu").style.setProperty("--option-width", (menuOptionWidth.offsetWidth/2) + "px");

var ballTxt = document.getElementsByClassName("txt")[0];

var lightMode = 
{
    color: "rgb(243, 243, 243)",
    bck: "rgb(15, 15, 15)",
    imgSrc: "../image/light-bulb-on.png",
    imgSrcBot: "../image/earth-bulb-light-off.png"
}


var nightMode = 
{
    color: "rgb(15, 15, 15)",
    bck: "rgb(243, 243, 243)",
    imgSrc: "../image/light-bulb-off.png",
    imgSrcBot: "../image/earth-bulb-light.png"
}

function checkMode()
{
    if(theBall.offsetTop > init)
    {
        return 0;
    } else 
    {
        return 1;
    }
}


var boxes = document.getElementsByClassName("box");
var boxContent = document.getElementsByClassName("box-content");
// var vBoxLines = document.getElementsByClassName("v-line-sp");
// var hBoxLines = document.getElementsByClassName("h-line");
// var spHBoxLines = document.getElementsByClassName("sp-h-line");

var flipedLightBulb = document.getElementById("lbulb-box");
var bulbImage = document.getElementById("bulb-img");


function chanage(imgSpace, imgSrc) {
    imgSpace.innerHTML = "";
    imgSpace.innerHTML = "<img src='" + imgSrc + "'>";
}


function display(displayType)
{
    for(var i = 0; i<boxContent.length; i++)
    { 
        boxContent[i].style.display = displayType;
        if(displayType != "none")
        {
            if (i%2 == 0) boxContent[i].style.animation = "slide-left .3s linear";
            else boxContent[i].style.animation = "slide-right .3s linear";
        }
    }
}

function setMode()
{
    if (checkMode())
    {
        document.body.style.setProperty("--mode-color", lightMode.color);
        document.body.style.setProperty("--mode-bck", lightMode.bck);
        display("flex");
        chanage(bulbImage, nightMode.imgSrc);
        chanage(flipedLightBulb, nightMode.imgSrcBot);
        
    } else
    {
        document.body.style.setProperty("--mode-color", nightMode.color);
        document.body.style.setProperty("--mode-bck", nightMode.bck);
        display("none");
        chanage(bulbImage, lightMode.imgSrc);
        chanage(flipedLightBulb, lightMode.imgSrcBot);
    }
}

function moveBall() 
{
    if(theBall.offsetTop == init)
    {
        theBall.style.marginTop = (ballPlaceHeight - ballHeight) + "px";
    } else 
    {
        theBall.style.marginTop = "0";
    }
}


function displayType(el, type)
{
    if(el.style.display == type) return 1;
    else return 0;
}



theBall.onclick = function() {
    if(!displayType(mainComp.c_menu, "block"))
    {
        moveBall();
        setMode();
    } else {
        menuDisplay();
    }
}



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
    setTimeout(() => {
        selfWriting(el, time);
    }, 5000);
}

selfWriting(ballTxt, 300);



