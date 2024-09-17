//Variaveis bolinha
let xBolinha=300;
let yBolinha=200;
let diametro=35;

let velocidadexBolinha=6;
let velocidadeyBolinha=6;

let xRaqueteJogador=5;
let yRaqueteJogador=15;
let alturaRaqueteJogador=15;
let larguraRaqueteJogador=90;

//colisao
let colidiu = false;

let xRaqueteOponente=380;
let yRaqueteOponente=15;
let alturaRaqueteOponente=15;
let larguraRaqueteOponente=90;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('black');
  mostraBolinha();
  mivimentaBolinha ();
  mostraRaqueteJogador();
  movimentaRaqueteJogador ();
  verificaColisao();
  verificaColisaoRaqueteJogador();
  mostraRaqueteOponente ();
}

function mostraBolinha() {
  fill("red")
  circle(xBolinha, yBolinha, diametro)
  
}

function mivimentaBolinha () {
  xBolinha+= velocidadexBolinha;
  yBolinha+= velocidadeyBolinha;
  
}

function verificaColisao() {
  if (xBolinha> width||xBolinha< 0)
  { velocidadexBolinha*=-1; }
  
 if (yBolinha> height||yBolinha< 0)
  { velocidadeyBolinha*=-1; }
}
  

  
 function mostraRaqueteJogador () {
 rect(xRaqueteJogador, yRaqueteJogador,alturaRaqueteJogador, larguraRaqueteJogador ) 
fill("white")
stroke ("black")

   
 }  

 function movimentaRaqueteJogador() {
  if (keyIsDown (UP_ARROW)) {
  yRaqueteJogador-= 10; }
   
   if (keyIsDown (DOWN_ARROW)) {
  yRaqueteJogador+= 10; }
  
 }

 function verificaColisaoRaqueteJogador() {
   colidiu = collideRectCircle (
   xRaqueteJogador,
   xRaqueteOponente,
   yRaqueteJogador,
   yRaqueteOponente,
   alturaRaqueteJogador,
   alturaRaqueteOponente,
  larguraRaqueteJogador,
  larguraRaqueteOponente,
  xBolinha,
  yBolinha,
  diametro / 2
);
  if (colidiu==true) {
    velocidadexBolinha *=-1
  }
 }

function mostraRaqueteOponente () {
 rect(xRaqueteOponente, yRaqueteOponente,alturaRaqueteOponente, larguraRaqueteOponente ) 
fill("white")
stroke ("black")
  }

function movimentaRaqueteOponente() {
  if (keyIsDown ()) {
  yRaqueteOponente-= 10; }
   
   if (keyIsDown (DOWN_ARROW)) {
  yRaqueteOponente+= 10; }
  
 }
  
  
  
  
