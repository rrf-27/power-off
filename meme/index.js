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

var memePar = document.querySelector("main");

function popUp(poz) {
    var parent = document.createElement("div");
    parent.classList.add("meme-shadow");
    parent.classList.add("center-content-flex");
    memePar.appendChild(parent);

    var xSpace = document.createElement("div");
    xSpace.classList.add("meme-close");
    parent.appendChild(xSpace);
    
    var xBtn = document.createElement("div");
    xBtn.classList.add("x-meme");
    xBtn.onclick = () => {
        parent.remove();
    }

    xSpace.appendChild(xBtn);
    
    var m = document.createElement("img");
    m.classList.add("meme");
    m.src = memeHref[poz];
    parent.appendChild(m);
}

function generateAuto(link, i)
{
    var el = document.createElement("img");
    el.classList.add("meme-pl");
    el.classList.add("center-content-flex");
    el.src = link;
    el.id = "meme" + i;
    el.onclick = () => {
        popUp(i);
    }
    memePar.appendChild(el);

    return el.naturalHeight;
}



for(var i = 0; i<memeHref.length - 1; i++)
{
    var h = generateAuto(memeHref[i], i);

    for(var j = i+1; j<memeHref.length; j++)
    {
        var h_j = generateAuto(memeHref[j], j); 
        if(h < h_j) {
            var copie = memeHref[i];
            memeHref[i] = memeHref[j];
            memeHref[j] = copie;
        }
        document.getElementById("meme" + j).remove();
    }
    document.getElementById("meme" + i).remove();
}



for(var i = 0; i<memeHref.length; i++)
{
    generateAuto(memeHref[i], i);
}

var theFoot = document.getElementById("foot");
var theNav = document.querySelector("nav");
var theContent = document.querySelector("main");

var footDistToTop = window.innerHeight - theFoot.offsetHeight - theContent.offsetHeight - theNav.offsetHeight;

if(footDistToTop > 0) {
    theFoot.style.position = "relative";
    theFoot.style.top = footDistToTop/2 + "px";
}