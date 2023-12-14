var number = 10;
var quiCommence = 1;
var A = 2;
var B = 3;

function getRandomNumber() {
    number= Math.floor(Math.random() * 11);
    number = number - A + B;
    document.getElementById('box').innerHTML = 'nombre final après avoir pris en compte l initiative: ' + number;
    var quiCommenceTexte = String;
    document.getElementById('secondBox').innerHTML = quiCommenceTexte;
    if(number < 6){
    quiCommenceTexte = 'A commence'
    } else {
    quiCommenceTexte = 'B commence'
    };
    document.getElementById('secondBox').innerHTML = quiCommenceTexte;
 }

getRandomNumber()











