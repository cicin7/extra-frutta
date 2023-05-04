let headermain = document.getElementById('headermain');
let desklogo = document.getElementById('desklogo');

headermain.addEventListener('click', goToUp);
desklogo.addEventListener('click', goToUp);

function goToUp(){
    headermain.scrollIntoView({
        behavior: 'smooth'
    });
}