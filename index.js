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
    imgSrc: "./image/light-bulb-on.png",
    imgSrcBot: "./image/earth-bulb-light-off.png",
    sBck: "#C2C2C2",
    sBallPlaceBck: "#A6A6A6",
    sBallBck: "#737373",
    sColor: "#A6A6A6"
}


var nightMode = 
{
    color: "rgb(15, 15, 15)",
    bck: "rgb(243, 243, 243)",
    imgSrc: "./image/light-bulb-off.png",
    imgSrcBot: "./image/earth-bulb-light.png",
    sBck: "rgb(236, 236, 236)",
    sBallPlaceBck: "rgb(217, 217, 217)",
    sBallBck: "rgb(175, 173, 173)",
    sColor: "rgba(0, 0, 0, 1)"
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

var main = document.querySelector('main');

function setMode()
{
    if (checkMode())
    {
        document.body.style.setProperty("--mode-color", lightMode.color);
        document.body.style.setProperty("--mode-bck", lightMode.bck);
        main.style.setProperty("--s-bck", lightMode.sBck);
        main.style.setProperty("--s--ball-place-bck", lightMode.sBallPlaceBck);
        main.style.setProperty("--s-ball-bck", lightMode.sBallBck);
        main.style.setProperty("--s-color", lightMode.sColor);
        
        display("flex");
        chanage(bulbImage, nightMode.imgSrc);
        chanage(flipedLightBulb, nightMode.imgSrcBot);
        
    } else
    {
        document.body.style.setProperty("--mode-color", nightMode.color);
        document.body.style.setProperty("--mode-bck", nightMode.bck);
        main.style.setProperty("--s-bck", nightMode.sBck);
        main.style.setProperty("--s--ball-place-bck", nightMode.sBallPlaceBck);
        main.style.setProperty("--s-ball-bck", nightMode.sBallBck);
        main.style.setProperty("--s-color", nightMode.sColor);

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



var box = {
    articole: document.getElementById("art-up"),
    quickFacts: document.getElementById("quickf-box")
}

box.articole.onclick = () => {
    document.getElementById("pop-art").style.display = "flex";
}

box.quickFacts.onclick = () => {
    document.getElementById("facts").onclick = "flex";
}
