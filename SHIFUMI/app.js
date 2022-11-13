var pierre = document.getElementById("pierre")
var feuille = document.getElementById("feuille")
var ciseaux = document.getElementById("ciseaux")
var affichage = document.getElementById("resultat")

var joueur = null
var ordi = null 

var choixOrdi = (i) => { 
    var i = Math.floor(Math.random()*3)   
    if (i === 0){
        ordi = "Pierre"
        console.log(ordi)
    }else if (i === 1) {
        ordi = "Feuille"
        console.log(ordi)
    }else {
        ordi = "Ciseaux"
        console.log(ordi)
    }
  return ordi
}
 

var resultat = (o,j) => {
    if ((o === "Pierre" && j === "Ciseaux") || (o === "Feuille" && j === "Pierre") || (o === "Ciseaux" && j === "Feuille")) {
        affichage.textContent = `${j} VS ${o} : Perdu !`;
        console.log(o, j)
    }else if ((o === "Pierre" && j === "Feuille") || (o === "Feuille" && j === "Ciseaux") || (o === "Ciseaux" && j === "Pierre")) {
        affichage.textContent = `${j} VS ${o} : Victoire !`
        console.log(o, j)
    }else {
        affichage.textContent = `${j} VS ${o} : Égalité !`
        console.log(o, j)
    }
}


pierre.addEventListener("click", function(){
    joueur = "Pierre" 
    choixOrdi()
    resultat(ordi,joueur)
})
feuille.addEventListener("click", function(){
    joueur = "Feuille"
    choixOrdi()
    resultat(ordi,joueur)
})
ciseaux.addEventListener("click", function(){
    joueur = "Ciseaux"
    choixOrdi()
    resultat(ordi,joueur)
})

