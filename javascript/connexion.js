const form1 = document.querySelector(".form1");
const login1 = document.querySelector(".connexion .login1");
const login2 = document.querySelector(".connexion2 .login1");
const closeee = document.querySelector(".closeee");
const burger = document.querySelector(".burger");
const bodyburger = document.querySelector(".bodyburger");
const creer1 = document.querySelector(".creer1");

login1.addEventListener("click", (e) => {
    e.preventDefault();
    if (form2.style.top == "5rem") {
        closeee2.style.backgroundColor = "white";
    } else {
        if (form2.style.top !== "5rem") {
            form1.style.top = "5rem";
            burger.disabled = true;
        }
    }
});

login2.addEventListener("click", (e) => {
    e.preventDefault();
    if (form2.style.top == "5rem") {
        closeee2.style.backgroundColor = "white";
    } else {
        if (form2.style.top !== "5rem") {
            form1.style.top = "5rem";
            burger.disabled = true;
            bodyburger.style.left = "-50rem";
        }
    }
});

closeee.addEventListener("click", (e) => {
    e.preventDefault();
    form1.style.top = "-150rem";
    burger.disabled = false;
    bodyburger.style.left = "inherit";
    closeee.style.backgroundColor = "transparent";
});

creer1.addEventListener("click", (e) => {
    e.preventDefault();
    if (form2.style.top !== "5rem") {
        form1.style.top = "-150rem";
        form2.style.top = "5rem";
        burger.disabled = true;
        bodyburger.style.left = "-50rem";
    }

})


