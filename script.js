<<<<<<< HEAD
const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const close = document.getElementById('close');
if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
=======
const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const close = document.getElementById('close');
if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
>>>>>>> fb0803bccf0b50e254560fec1d97fc1d9f3b7698
