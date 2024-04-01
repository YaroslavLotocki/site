function PageScroll(elem){
    let currentID = document.getElementById(elem); 
    currentID.scrollIntoView({block: "center", behavior: "smooth"});
}

const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    header.classList.toggle('active');
})

