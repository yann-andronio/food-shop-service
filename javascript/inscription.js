const form2 = document.querySelector(".form2");
const login10 = document.querySelector(".connexion .login2");
const login20 = document.querySelector(".connexion2 .login2");
const closeee2 = document.querySelector(".closeee20");
const burger2 = document.querySelector(".burger");
const bodyburger2 = document.querySelector(".bodyburger");
const creer2 = document.querySelector(".creer2");

login10.addEventListener("click", (e) => {
    e.preventDefault();
    if (form1.style.top == "5rem") {
        closeee.style.backgroundColor = "white";
    } else {
        if (form1.style.top !== "5rem") {
            form2.style.top = "5rem";
            burger2.disabled = true;
        }
    }

});

login20.addEventListener("click", (e) => {
    e.preventDefault();
    if (form1.style.top == "5rem") {
        closeee.style.backgroundColor = "white";
    } else {
        if (form1.style.top !== "5rem") {
            form2.style.top = "5rem";
            burger2.disabled = true;
            bodyburger2.style.left = "-50rem";
        }
    }
});

closeee2.addEventListener("click", (e) => {
    e.preventDefault();
    form2.style.top = "-150rem";
    burger2.disabled = false;
    bodyburger2.style.left = "inherit";
    closeee2.style.backgroundColor = "transparent";
});
creer2.addEventListener("click", (e) => {
    e.preventDefault();
    if (form1.style.top !== "5rem") {
        form2.style.top = "-150rem";
        form1.style.top = "5rem";
        burger.disabled = true;
        bodyburger.style.left = "-50rem";
    }

})

