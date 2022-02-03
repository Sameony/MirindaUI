const nav = document.querySelector(".navigation");
const closedIco = document.querySelector(".closed-ico");
const openIco = document.querySelector(".open-ico");
const titles = document.querySelectorAll('.smol-title');
const drawer = document.querySelector(".drawer");
const container = document.querySelector(".container");


openIco.addEventListener("click", ()=>
{
    drawer.style.width = "5rem";
    nav.style.width = "5rem";
    closedIco.style.display = "block";
    openIco.style.display = "none";
    for(let i=0;i<titles.length;i++)
    {
        titles[i].style.display="none";
    }
    container.style.width = "calc(100% - 6rem)";
    container.style.paddingLeft = "10rem";
})
closedIco.addEventListener("click", ()=>
{
    drawer.style.width = "18.75rem";
    nav.style.width = "18.75rem";
    openIco.style.display = "block";
    closedIco.style.display = "none";
    for(let i=0;i<titles.length;i++)
    {
        titles[i].style.display="block";
    }
    container.style.width = "calc(100% - 19rem)";
    container.style.paddingLeft = "25rem";
})
