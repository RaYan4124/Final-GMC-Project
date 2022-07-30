const touches = [...document.querySelectorAll('.btn')];
const listKeycode = touches.map(touche => touche.dataset.key);
const scrn = document.querySelector('.screen');

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur)

})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)

})

const calculer = (valeur) => {
    if (listKeycode.includes(valeur)) {
        switch (valeur) {
            case '67':
                scrn.textContent = "";
                break;
            case '187':
                const calcul = eval(scrn.textContent);
                scrn.textContent = calcul;
                break;
            default:
                const indexKeycode = listKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                scrn.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    scrn.textContent = "ERROR:"+ e.message
})