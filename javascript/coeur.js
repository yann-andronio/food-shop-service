

    const coeur = document.querySelectorAll('.card3 .noteetprix .etoile i');

    coeur.forEach(heart => {
        heart.addEventListener('click', function(e) {
            e.preventDefault();
            e.target.classList.toggle('far'); 
            e.target.classList.toggle('fas'); 
            
        });
    });
