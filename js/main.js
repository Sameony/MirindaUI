const nav = document.querySelector(".navigation");
const closedIco = document.querySelector(".closed-ico");
const openIco = document.querySelector(".open-ico");
const icons = document.querySelectorAll(".smol-ico");
const titles = document.querySelectorAll('.smol-title');
const drawer = document.querySelector(".drawer");
const container = document.querySelector(".container");




// for changing < and > to %lt and %gt 
const boxOutput = document.querySelectorAll(".showcase");
boxOutput.forEach(box=>{
    let code = box.innerHTML;
        code = code.replaceAll("<", "&LT");
        box.innerHTML = code;
});

var mq = window.matchMedia( "(max-width: 700px)" );
if (mq.matches) {
    // window width is at less than 700px
    openIco.addEventListener("click", ()=>
    {
        drawer.style.width = "0.2rem";
        nav.style.width = "0.2rem";
        closedIco.style.display = "block";
        openIco.style.display = "none";
        for(let i=0;i<titles.length;i++)
        {
            titles[i].style.display="none";
            icons[i].style.display="none";
        }
        container.style.width = "90vw";
        container.style.paddingLeft = "3rem";
    })
    closedIco.addEventListener("click", ()=>
    {
        drawer.style.width = "90vw";
        nav.style.width = "90vw";
        openIco.style.display = "block";
        closedIco.style.display = "none";
        for(let i=0;i<titles.length;i++)
        {
            titles[i].style.display="block";
            icons[i].style.display="block";
        }
        container.style.width = "0";
        
    })
}
else{
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
        container.style.width = "calc(100% - 17rem)";
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
        container.style.width = "calc(100% - 25rem)";
        container.style.paddingLeft = "23rem";
    })
}