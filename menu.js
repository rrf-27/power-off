

var mainComp = 
{
    c_menu: document.getElementById("menu"),
    c_nav: document.querySelector("nav"),
    c_main: document.querySelector("main"),
    c_w: getComputedStyle(document.getElementById("menu")).getPropertyValue('--menu-w')
}

var menuBtn = 
{
    open: document.getElementById("open-menu"),
    close: document.getElementById("close-menu"),
    meme: document.getElementById("meme-btn")
}

function displayType(el, type)
{
    if(el.style.display == type) return 1;
    else return 0;
}




function menuDisplay()
{
    if(displayType(mainComp.c_menu, "block"))
    {
        mainComp.c_menu.style.animation = "allToNone .3s linear";
        setTimeout(() => {
            mainComp.c_menu.style.display = "none";
        }, 300);
        mainComp.c_main.style.transform = "none";
        mainComp.c_nav.style.transform = "none";
        setTimeout(()=> {
            document.body.style.overflow = "auto";
        }, 400);
    } else {
        mainComp.c_menu.style.display = "block";
        mainComp.c_main.style.transform = "translateX(30%)";
        mainComp.c_nav.style.transform = "translateX("+ mainComp.c_w +")";
        document.body.style.overflow = "hidden";
        mainComp.c_menu.style.animation = "noneToAll .3s linear";
        if(!checkMode()) 
        {
            moveBall();
            setMode();
        }
    }
    
}




menuBtn.open.onclick = function()
{
    menuDisplay();
}
menuBtn.close.onclick = function()
{
    menuDisplay();
}

console.log(window.location.pathname);

if(window.location.pathname == "/power-off/")
{
    var memeHref = 
    [
        "./meme/meme1.jpeg",
        "./meme/meme2.jpeg",
        "./meme/meme3.jpeg",
        "./meme/meme4.jpeg",
        "./meme/meme5.jpeg",
        "./meme/meme6.jpeg",
        "./meme/meme7.jpeg",
        "./meme/meme8.jpeg",
        "./meme/meme9.jpeg",
        "./meme/meme10.jpeg",
        "./meme/meme11.jpeg",
        "./meme/meme12.jpeg",
        "./meme/meme13.jpeg",
        "./meme/meme14.jpeg",
        "./meme/meme15.jpeg",
        "./meme/meme16.jpeg",
        "./meme/meme17.jpeg",
        "./meme/meme18.jpeg"
    ];
} else {
    var memeHref = 
    [
        "../meme/meme1.jpeg",
        "../meme/meme2.jpeg",
        "../meme/meme3.jpeg",
        "../meme/meme4.jpeg",
        "../meme/meme5.jpeg",
        "../meme/meme6.jpeg",
        "../meme/meme7.jpeg",
        "../meme/meme8.jpeg",
        "../meme/meme9.jpeg",
        "../meme/meme10.jpeg",
        "../meme/meme11.jpeg",
        "../meme/meme12.jpeg",
        "../meme/meme13.jpeg",
        "../meme/meme14.jpeg",
        "../meme/meme15.jpeg",
        "../meme/meme16.jpeg",
        "../meme/meme17.jpeg",
        "../meme/meme18.jpeg"
    ];
}


var memeBtn = document.getElementsByClassName("meme-btn");

var meme = {
    father: document.getElementById("meme-time"),
    generate: document.getElementsByClassName("red-btn")[0],
    place: document.getElementsByClassName("meme-place")[0]
}

function genImage(prev)
{
    var random = Math.floor(Math.random() * memeHref.length);
    while(random == prev)
    {
        random = Math.floor(Math.random() * memeHref.length);
    }
    var imaj = document.createElement("img");
    imaj.src = memeHref[random];
    imaj.style.maxWidth = "100%";
    imaj.style.height = "100%";
    imaj.alt = "meme by us";
    meme.place.appendChild(imaj);

    return random;
}
var a = genImage(-1);

meme.generate.onclick = () => {
    meme.place.innerHTML = "";
    a = genImage(a);
    if(meme.generate.offsetTop + 150 > meme.generate.offsetHeight) 
    {
        meme.generate.height = meme.generate.offsetHeight/2 + "px";
        meme.generate.width = meme.generate.offsetWidth/2 + "px";
    }
}

menuBtn.meme.onclick= () => {
    meme.father.style.display = "flex";
}


var popArt = document.getElementById("pop-art");
var artBtn = document.getElementById("art-btn");



artBtn.onclick = () => {
    popArt.style.display = "flex";
}
window.addEventListener("keydown", (e) => {
    if(e.keyCode == 27) {
        popArt.style.display = "none";
        meme.father.style.display = "none";
    }
})

var afisParent = document.getElementById("show-afis");
var afisBtn = document.getElementById("afis-btn");
afisBtn.onclick = () => {
    afisParent.style.display = "flex";
}

window.addEventListener("keydown", (e) => {
    if(e.keyCode == 27) afisParent.style.display = "none";
})

var xBtn = document.getElementsByClassName("exit");

function close(docId, i)
{
    var el = document.getElementById(docId);
    xBtn[i].onclick = () => {
        el.style.animation = "zeroToNotSeen .2s linear";
        setTimeout(() => {
            el.style.display = "none";
            el.style.animation = "zeroToSeen .2s linear";
        }, 200);
    }
}

close("pop-art", 0);
close("meme-time", 1);
close("show-afis", 2);
close("facts", 3);


var footBtn = document.getElementsByClassName("case-middle")[0];
footBtn.onclick = () => {
    window.scrollTo(0, 0);
}
