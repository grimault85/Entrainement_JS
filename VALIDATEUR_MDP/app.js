/* 
@NOTE:
    C'est une très bonne nouvelles que tu sache reverse-engineer un sujet.
    Point d'amelioration:
    - Ton code ne marche pas avec plusieurs langues
    - Ton code ne scale pas si ont doit rajouté des nouvelles validations
    - Ton archi n'est pas au standars du marché
    
    Le standars:
    - Le form est envoyé sur le serveur
    - Le serveur valide les données
    - Le serveur réponds avec un objets JSON avec une liste de d'érreur qu'il traduit grace a un params dans l'url
    - Le client prend cette liste et la render sur le navigateur avec le bon styling

Essay de faker la request et implemente l'archi proposé ;)
*/
var input = document.getElementById("password")
var eyes = document.getElementById("eyes")
var eyes2 = document.getElementById("eyes2")
var check_1 = document.getElementById("check1")
var check_2 = document.getElementById("check2")
var check_3 = document.getElementById("check3")
var check_4 = document.getElementById("check4")
var check_5 = document.getElementById("check5")
var img_check1 = document.getElementById("check_1")
var img_check2 = document.getElementById("check_2")
var img_check3 = document.getElementById("check_3")
var img_check4 = document.getElementById("check_4")
var img_check5 = document.getElementById("check_5")


function validation () {
    var valide = 0
     
    if (input.value.match(/[0-9]/i)) {
        check_1.style.color="green" 
        img_check1.style.display="inline"
        valide++
    }else {
        check_1.style.color="red"
        img_check1.style.display="none"
        valide--
    }

    if(input.value.match(/[A-Z]/)) {
        check_2.style.color="green" 
        img_check2.style.display="inline"
        valide++
    }else {
        check_2.style.color="red"
        img_check2.style.display="none" 
        valide--
    }

    if(input.value.match(/[a-z]/)) {
        check_3.style.color="green" 
        img_check3.style.display="inline"
        valide++
    }else {
        check_3.style.color="red"
        img_check3.style.display="none" 
        valide--
    }
    
    if(input.value.match(/[^a-zA-Z0-9""]/i)) {
        check_4.style.color="green" 
        img_check4.style.display="inline"
        valide++
    }else {
        check_4.style.color="red"
        img_check4.style.display="none" 
        valide--
    }

    if(input.value.length >= 12) {
        check_5.style.color="green" 
        img_check5.style.display="inline"
        valide++
    }else {
        check_5.style.color="red"
        img_check5.style.display="none" 
        valide--
    }

    input.onkeyup = (key => {
        if(key.key === "Enter" && valide === 5) {
            alert("Mot de passe Valide !")
        }else if (key.key === "Enter" && valide !== 5){
            alert('Code Invalide ! ')
        }else {
        }
    })
}



eyes.addEventListener("click", function(){
    this.style.display="none" 
    input.setAttribute("type", "text")
    eyes2.style.display="inline"
})
eyes2.addEventListener("click", function(){
    this.style.display="none" 
    input.setAttribute("type", "password")
    eyes.style.display="inline"
})
