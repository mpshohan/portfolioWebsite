
const links = document.querySelectorAll('.navlist a');
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', ()=> {
    const currentPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if(currentPosition >= section.offsetTop + section.offsetHeight){
            links.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id')===
                link.getAttribute('href').substring(1)){
                    link.classList.add('active');
                }
            } )
        }
    })
})



const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY>100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
   
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}