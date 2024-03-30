function getRandomInt(max) { //рандом*
  return Math.floor(Math.random() * max);
}

function getFirstPlayer() { //функция определения порядка игры
  var k1 = 0;
  var k2 = 0;
  for (let i = 0; i < 6; i++) {
    if (g1[i][0] == crownCard[0]){
      k1++;
    }
    if (g2[i][0] == crownCard[0]){
      k2++;
    }
  }
  if (k1 > k2){return 1;}
  if (k2 > k1){return 0;}
  else{return getRandomInt(2)}
}

function getCard(rid, g) { //функция набора карт*
  while (g.length < 6) {
    g.push(DDeck[rid[0]]);
    rid.splice(0, 1);
  }
  return g;
}

function getRandomeDeck() { //перемешиванние колоды
  while (ID.length != 0) { 
    const index = getRandomInt(ID.length)
    RID.push(ID[index]);
    ID.splice(index, 1);
}
}


var g1 = [];
var g2 = [];
var crownCard;

const DDeck = ['c1', 'b1', 't1', 'p1', 'c2', 'b2', 't2', 'p2', 'c3', 'b3', 't3', 'p3', 'c4', 'b4', 't4', 'p4', 'c5', 'b5', 't5', 'p5', 'c6', 'b6', 't6', 'p6', 'c7', 'b7', 't7', 'p7', 'c8', 'b8', 't8', 'p8', 'c9', 'b9', 't9', 'p9'];
var ID = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]; //упорядоченная колода
var RID = [];

getRandomeDeck();

var g1 = getCard(RID, g1);
var g2 = getCard(RID, g2);
var crownCard = DDeck[RID[RID.length - 1]];
var FirstPlayer = getFirstPlayer();