var facts_parent = document.getElementById("facts");


var fact = {
    left_arr: document.getElementsByClassName("arrow")[0],
    right_arr: document.getElementsByClassName("arrow")[1],
    content: document.getElementsByClassName("fact-space")[0]
}

var quickFacts = 
[
    "Bineînțeles, nici poluarea apelor nu dispare din aceste efecte dăunătoare. Ce vrem să enunțăm prin asta? Ne referim la toate scurgerile de ulei în ape, majoritar fiind cele de petrol care au o consecință negativă la adresa compoziției și calității lor.",
    "Ut vel lectus sodales, vehicula justo viverra, laoreet leo. Etiam viverra quis est sodales porttitor.",
    "Nam varius, ipsum in vulputate consequat, sem nunc mattis justo, sed pretium nisl mauris eget sapien. In iaculis lectus cursus ante egestas, et dignissim est sagittis.",
    "Nunc ultrices odio non quam ultrices consectetur."
];

function validIndex(index)
{
    if(index < quickFacts.length && index > -1) return 1;
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