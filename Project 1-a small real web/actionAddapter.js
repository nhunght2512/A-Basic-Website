let btn = document.getElementById('cta_btn');
let overlay = document.getElementById('overlay');

btn.addEventListener('click',  () => {
    overlay.style.display = 'grid';
    overlay.classList.add('animate_overlay'); 
});