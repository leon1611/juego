'use strict'
/*Diseñar una función constructora que acepte un apodo, 
un número de vidas y un valor de carta (del 1 al 7). 
Además, se requiere incluir dos métodos como propiedades: 
uno para reducir las vidas y otro para mostrar el apodo 
junto con la cantidad de vidas restantes*/

function Jugador(apodo, vidas, valorCarta) {
    this.apodo = apodo;
    this.vidas = vidas;
    this.valorCarta = valorCarta;
  
    this.restVidas = function (perder) {
       this.vidas= this.vidas - perder;
    }
    this.showApodo = function () {
      alert(`El jugador: ${this.apodo} tiene ${this.vidas} Vidas restantes`);
    }
  }
  
  //let jugadorOne = new Jugador("Player1", 3, 5);
  let jugadorOne = new Jugador(prompt("Ingrese Su Apodo"),
  Number (prompt("Ingreser cantidad de vidas")),
  Number (prompt("Ingreser Valor de su Carta")));
  jugadorOne.showApodo(); 
  jugadorOne.restVidas(Number(prompt("Cuantas vidas perdio")));
  jugadorOne.showApodo(); 
 



