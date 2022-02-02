const nav = document.querySelector(".navigation");
const closedIco = document.querySelector(".closed-ico");
const openIco = document.querySelector(".open-ico");
const titles = document.querySelectorAll('.smol-title');
const drawer = document.querySelector(".drawer");

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
})
