import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.page.html',
  styleUrls: ['./jogo.page.scss'],
})
export class JogoPage implements OnInit {
  player1: string;
  player2: string;
  esconder = false;
  playerAtual = "Player 1";
  numeroJogada = 1;
  restanteDivisao: number;
  caracterPlayerRodada: string;
  gridClicado: number;
  caracterGrid1 = "";
  caracterGrid2 = "";
  caracterGrid3 = "";
  caracterGrid4 = "";
  caracterGrid5 = "";
  caracterGrid6 = "";
  caracterGrid7 = "";
  caracterGrid8 = "";
  caracterGrid9 = "";

  constructor() { }

  ngOnInit() {
  }

  defineCaracterRodada() {
    if (this.playerAtual === "Player 1") {
      this.caracterPlayerRodada = this.player1;
    } else {
      this.caracterPlayerRodada = this.player2;
    }
  }

  setaValor(gridClicado) {
    if (gridClicado == 1) {
      this.caracterGrid1 = this.caracterPlayerRodada;
    } else if (gridClicado == 2) {
      this.caracterGrid2 = this.caracterPlayerRodada;
    } else if (gridClicado == 3) {
      this.caracterGrid3 = this.caracterPlayerRodada;
    } else if (gridClicado == 4) {
      this.caracterGrid4 = this.caracterPlayerRodada;
    } else if (gridClicado == 5) {
      this.caracterGrid5 = this.caracterPlayerRodada;
    } else if (gridClicado == 6) {
      this.caracterGrid6 = this.caracterPlayerRodada;
    } else if (gridClicado == 7) {
      this.caracterGrid7 = this.caracterPlayerRodada;
    } else if (gridClicado == 8) {
      this.caracterGrid8 = this.caracterPlayerRodada;
    } else if (gridClicado == 9) {
      this.caracterGrid9 = this.caracterPlayerRodada;
    }
  }

  definirNumeroJogada() {
    this.numeroJogada += 1;
  }

  definirPlayerJogada() {
    if (this.playerAtual === "Player 1") {
      this.playerAtual = "Player 2";
    } else {
      this.playerAtual = "Player 1";
    }
  }

  testaResultado() {
    if (this.caracterGrid1 != "" && this.caracterGrid2 != "" && this.caracterGrid3 != "" && this.caracterGrid1 == this.caracterGrid2 && this.caracterGrid1 == this.caracterGrid3 && this.caracterGrid2 == this.caracterGrid3) {
      console.log("Ganhou linha 1");
    } else if (this.caracterGrid4 != "" && this.caracterGrid5 != "" && this.caracterGrid6 != "" && this.caracterGrid4 == this.caracterGrid5 && this.caracterGrid4 == this.caracterGrid6 && this.caracterGrid5 == this.caracterGrid6) {
      console.log("Ganhou linha 2");
    } else if (this.caracterGrid7 != "" && this.caracterGrid8 != "" && this.caracterGrid9 != "" && this.caracterGrid7 == this.caracterGrid8 && this.caracterGrid7 == this.caracterGrid9 && this.caracterGrid8 == this.caracterGrid9) {
      console.log("Ganhou linha 3");
    } else if (this.caracterGrid1 != "" && this.caracterGrid4 != "" && this.caracterGrid7 != "" && this.caracterGrid1 == this.caracterGrid4 && this.caracterGrid1 == this.caracterGrid7 && this.caracterGrid4 == this.caracterGrid7) {
      console.log("Ganhou coluna 1");
    } else if (this.caracterGrid2 != "" && this.caracterGrid5 != "" && this.caracterGrid8 != "" && this.caracterGrid2 == this.caracterGrid5 && this.caracterGrid2 == this.caracterGrid8 && this.caracterGrid5 == this.caracterGrid8) {
      console.log("Ganhou coluna 2");
    } else if (this.caracterGrid3 != "" && this.caracterGrid6 != "" && this.caracterGrid9 != "" && this.caracterGrid3 == this.caracterGrid6 && this.caracterGrid3 == this.caracterGrid9 && this.caracterGrid6 == this.caracterGrid9) {
      console.log("Ganhou coluna 3");
    } else if (this.caracterGrid1 != "" && this.caracterGrid5 != "" && this.caracterGrid9 != "" && this.caracterGrid1 == this.caracterGrid5 && this.caracterGrid1 == this.caracterGrid9 && this.caracterGrid5 == this.caracterGrid9) {
      console.log("Ganhou Vertical 1");
    } else if (this.caracterGrid3 != "" && this.caracterGrid5 != "" && this.caracterGrid7 != "" && this.caracterGrid3 == this.caracterGrid5 && this.caracterGrid3 == this.caracterGrid7 && this.caracterGrid5 == this.caracterGrid7) {
      console.log("Ganhou Vertical 2");
    }
  }

  definirCaracter(player1) {
    if (player1 === "X") {
      this.player2 = "0";
    } else {
      this.player2 = "X";
    }
  }
}