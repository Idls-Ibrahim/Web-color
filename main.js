const navClick = document.querySelector('.click');
const listBar = document.querySelector('.nav-bar');
navClick.addEventListener('click', ()=>{
    listBar.classList.toggle('open');
    listBar.style.cssText = "transition: 1s ease;";
    navClick.classList.toggle("move");
    navClick.style.cssText = "transition: 1s ease;";
});
window.onscroll = ()=>{
    listBar.classList.remove('open');
    navClick.classList.remove("move");
}