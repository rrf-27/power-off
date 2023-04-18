var cifs = {
    first: document.getElementsByClassName("cif-dis")[0],
    second: document.getElementsByClassName("cif-dis")[1]
}

function changeNo(el, time, p, a) {
    var copie = el.innerHTML;
    el.innerHTML = "";
    function dis(i)
    {
        if (i <= copie) {
            el.innerHTML = i;
            el.classList.add("ani");
            setTimeout(() => {
                el.classList.remove("ani");
                dis(i+p);
            }, time);
        }
    }
    dis(a);
}
changeNo(cifs.first, .00000000000000000000000000001, 10, 3);
changeNo(cifs.second, 100, 1, 1);