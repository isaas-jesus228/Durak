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