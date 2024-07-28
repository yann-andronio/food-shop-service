const buttons = document.querySelectorAll(".but");

buttons.forEach(button => {
    button.addEventListener("click", function(e) {
        e.preventDefault();
        alert("Votre commande à été bien envoyer ");
    });
});