
// atao anaty conteneur reglagequa rehetra dia tedaviny ny button de ameny fonction mitovi

document.querySelectorAll('.reglagequantiter').forEach(reglage => {
    let i = 1;
    const plusButton = reglage.querySelector('.plus');
    const minusButton = reglage.querySelector('.moins');
    const number = reglage.querySelector('.qt');


    plusButton.addEventListener('click', (e) => {
        e.preventDefault();
        number.innerHTML = ++i;
        console.log("plus");
    });

   
    minusButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (i > 1) {
            number.innerHTML = --i;
            console.log("moins");
        }
    });
});








