function ludogame(){ 
  let roll1 = Math.floor(Math.random() * 6) + 1; 
  let rolldice1 = `img/dice${roll1}.png`;
  document.getElementById('d1').setAttribute('src', rolldice1);
 
  let roll2 = Math.floor(Math.random() * 6) + 1; 
  let rolldice2 = `img/dice${roll2}.png`;
  document.getElementById('d2').setAttribute('src', rolldice2);
 
  if(roll1 > roll2){
    document.querySelector('h1').innerHTML="Player 1 WON";
  } 
  else if(roll1 < roll2){
    document.querySelector('h1').innerHTML="Player 2 WON";
  }
  else{
    document.querySelector('h1').innerHTML="DRAW ";
  }
 }