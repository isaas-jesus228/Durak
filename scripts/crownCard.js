var suit = crownCard[0];
var suitId = document.getElementById('suitId');
var number = crownCard[1];

if (suit == 'c'){
    let img = document.createElement("img");
    img.src = 'img/chyervy.png';
    img.className = 'suit';
    suitId.append(img);
}
if (suit == 'b'){
    let img = document.createElement("img");
    img.src = 'img/booby.png';
    img.className = 'suit';
    suitId.append(img);
}
if (suit == 'p'){
    let img = document.createElement("img");
    img.src = 'img/pike.png';
    img.className = 'suit';
    suitId.append(img);
}
if (suit == 't'){
    let img = document.createElement("img");
    img.src = 'img/treff.png';
    img.className = 'suit';
    suitId.append(img);
}