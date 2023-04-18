var facts_parent = document.getElementById("facts");


var fact = {
    left_arr: document.getElementsByClassName("arrow")[0],
    right_arr: document.getElementsByClassName("arrow")[1],
    content: document.getElementsByClassName("fact-space")[0]
}

var quickFacts = 
[
    "Dacă fiecare persoană ar șterge doar 10 e-mailuri, am putea economisi 1.725.00 gigabytes de spațiu de stocare și aproximativ 55,2 milioane de kilowați de putere.",
    "Doar 5% din puterea consumată de un încărcător de telefon este folosită pentru a încărca telefonul - așa că nu uitați să îl opriți când ați terminat!",
    "În locuința medie, 75% din energia electrică utilizată pentru alimentarea electronicelor este consumată în timp ce produsele sunt oprite (în standby).",
    "Energia regenerabilă creează de trei ori mai multe locuri de muncă decât industria combustibililor fosili.",
    "Coborârea termostatului cu doar 1°C economisește 8% din costurile de încălzire.",
    "Laptopurile consumă cu până la 85% mai puțină energie electrică decât computerele desktop.",
    "Păsările și alte animale mici se pot urca pe liniile electrice fără a fi electrocutate, cu excepția cazului în care ating simultan o altă linie, ceea ce ar crea un circuit complet.",
    "Spălarea rufelor la 40°C consumă cu o treime mai puțină energie decât un ciclu de 60°C",
    "Aproximativ 30 % din energia utilizată în clădirile comerciale și industriale este utilizată ineficient sau inutil.",
    "De fiecare dată când deschizi ușa frigiderului, aproximativ 30% din aerul rece scapă! Acest lucru duce practic la mai multă putere consumată și la o factură mai mare.",
    "LED-urile sunt foarte eficiente energetic și ieftine. Luminile din casele și birourile noastre ar trebui înlocuite cu LED-uri pentru a economisi energie."
];

function validIndex(index)
{
    if(index < quickFacts.length && index >= 0) return 1;
    else return 0;
}



function changeFact(index, i)
{
    index = index + i;
    if(validIndex(index))
    {
        fact.content.innerHTML = quickFacts[index];
    } else {
        if(index == quickFacts.length) index = 0;
        else if(index == -1) index = quickFacts.length - 1;
        fact.content.innerHTML = quickFacts[index];
    }
    return index;
}

var quickBtn = document.getElementsByClassName("quick-btn");
for(var i = 0; i<quickBtn.length; i++)
{
    quickBtn[i].onclick = () => {
        fact.content.innerHTML = quickFacts[0];
        facts_parent.style.display = "flex";
    }
}
window.addEventListener("keydown", (e) => {
    if(e.keyCode == 27) facts_parent.style.display = "none";
})

a = changeFact(-1, 1);

fact.right_arr.onclick = () => {
    a = changeFact(a, 1);
}

fact.left_arr.onclick = () => {
    a = changeFact(a, -1);
}