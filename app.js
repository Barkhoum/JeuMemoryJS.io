// test pour faire apparaitre une image 
// let images = document.getElementById("images");
// images.addEventListener('click', function(e){
//     images.src ='images/pers1.jpeg';
// })
let personnages =[1,2,3,4,5,6,1,2,3,4,5,6]// liste des 12 images
    .map( p => [p,Math.random()])
    .sort((personnages,b) => personnages[1]-b[1])
    .map( p => p[0])
    // console.log(personnages)

let image = document.getElementsByTagName('img');// attribution d'une variable pour les 12 images
let topScore = document.getElementById("score");
let score= 0;
let essai = 1;
let paire1, paire2;
let temps = null;


// parcourir et melanger les images avec un boucle for 
for(let i=0; i<image.length; i++){
    image[i].src2 ='images/pers'+ personnages[i] + '.png';
}



// switcher la partie animation 
document.addEventListener('click', function(e){
    switch(essai){
        case 1 : 
            if (e.target.tagName=='IMG'){//
                e.target.src = e.target.src2;
                paire1 = e.target;
                essai = 2;
            }
            break;
        case 2 : 
            if (e.target.tagName=='IMG'){
                e.target.src = e.target.src2;
                paire2 = e.target;
                essai = 3;
            }  
            temps = setTimeout (check, 1500) 
            break;
        case 3 :  
            clearTimeout(temps);
            check()
            break; 
        }
        
});
function check(){
if (paire1.src2==paire2.src2){
                paire1.replaceWith(document.createElement('span'))
                paire2.replaceWith(document.createElement('span'))
                score += 50;
            }else{
                paire2.src = paire1.src = 'images/Ousuisje.png';
                score = Math.max(0, score-30);
            }
            essai = 1;
            topScore.textContent = score;

            if (document.getElementsByClassName('img').length==0){
                topScore.textContent += ' Gagné !';
            }
                   
}
// ALGO :
// - Click 1 > retourner l'image puis mémoriser l'image retournée ; 
// - Click 2 >retourner l'image puis la mémoriser;
// - les comparer 
// -- Si identiques alors les supprimer de la mémoire
// -- sinon les retourner
