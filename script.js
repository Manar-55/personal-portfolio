const text="MANAR ALGETHAMI";

let index=0;

const typing=document.getElementById("typing");

typing.innerHTML="";

function type(){

    if(index<text.length){

        typing.innerHTML+=text.charAt(index);

        index++;

        setTimeout(type,150);

    }

}

type();
const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    sections.forEach(section=>{

        const top=section.getBoundingClientRect().top;

        if(top<window.innerHeight-120){

            section.classList.add("show");

        }

    });

});

window.dispatchEvent(new Event("scroll"));