// function oui(){
//     document.getElementById("testh1").style.color="red";
// }

// var  name = prompt("quelle est votre nom")

// alert("bonjour " + name)

// var number = document.getElementById("lette");
// var plus = document.getElementById("plus");
// var moins= document.getElementById("moins")

// var i=1;
// plus.addEventListener('click',inter)
// moins.addEventListener('click', inter)

// // number.addEventListener('click', incr);
// function inter(e) {
//     if(i<=0) return;
//     let id = e.target.id;
//     if(id == 'plus') {
//         number.innerHTML= ++i;
//     }else {
//         number.innerHTML= --i;
//     }
//     // i = (id == 'plus') ? i+1 : i-1;

//     console.log(i)
// }


var card = document.querySelector(".section2 .liste1 .card");
var clickCount = 0;
var section2 = document.querySelector(".section2")





// bienvenue.addEventListener('click', () => {
//     if (clickCount % 2 == 0) {
//         bienvenue.style.backgroundColor = 'red';
//     } else {
//         bienvenue.style.backgroundColor = 'blue';
//     }
//     clickCount++;
// });


card.addEventListener('click', () => {

    var   newelement = document.createElement('div') ;
    var value =parseInt(prompt('donne moi une valeur'));

    newelement.textContent =value;
    newelement.style.color = 'blue';
    newelement.style.fontSize = '20px';
    newelement.style.marginTop = '10px';
    newelement.style.backgroundColor='red'


      section2.appendChild(newelement);
      
    });





creeeeeeeeeeeeeeeeeeeeeeeeeee

// card.addEventListener('click',creerElement)


// function creerElement() {
//     // Créer un élément div avec la classe "card"
//     const nouvelElement = document.createElement('div');
//     nouvelElement.classList.add('card');

//     // Contenu de la carte
//     nouvelElement.innerHTML = `
//         <div class="icon">
//             <img src="image/Ouvrir-un-fast-food-22.png" alt="">
//         </div>
//         <div class="desciption">
//             <h3>pizza</h3>
//             <div class="etoile">
//                 <i class="fa fa-star" aria-hidden="true"></i>
//                 <i class="fa fa-star" aria-hidden="true"></i>
//                 <i class="fa fa-star" aria-hidden="true"></i>
//                 <i class="fa fa-star" aria-hidden="true"></i>
//                 <i class="fa fa-star" aria-hidden="true"></i>
//             </div>
//             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, vel perferendis maiores sequi magnam tenetur saepe inventore eos officiis beatae cumque eveniet ad? Sequi iste sed maxime repellendus culpa molestias.</p>
//             <div class="prix">
//                 <p>prix: 25000 fmg</p>
//                 <div class="commande">
//                     <a href="">
//                         <i class="fa fa-shopping-cart" aria-hidden="true"></i>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     `;
    
//     // Ajouter l'élément au bas du conteneur
//     section2.appendChild(nouvelElement);
// }



    

