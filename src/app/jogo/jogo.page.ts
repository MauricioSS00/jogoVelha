import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

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
  playerVencedor: string;
  caracterGrid1 = "";
  caracterGrid2 = "";
  caracterGrid3 = "";
  caracterGrid4 = "";
  caracterGrid5 = "";
  caracterGrid6 = "";
  caracterGrid7 = "";
  caracterGrid8 = "";
  caracterGrid9 = "";

  constructor(
    public router: Router,
    public alertController: AlertController
  ) { }

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
    if (this.numeroJogada >= 9) {
      this.deuVelha();
    } else {
      if (this.caracterGrid1 != "" && this.caracterGrid2 != "" && this.caracterGrid3 != "" && this.caracterGrid1 == this.caracterGrid2 && this.caracterGrid1 == this.caracterGrid3 && this.caracterGrid2 == this.caracterGrid3) {
        console.log("Ganhou linha 1");
        this.playerVencedor = this.playerAtual;
        this.vencedor();
      } else if (this.caracterGrid4 != "" && this.caracterGrid5 != "" && this.caracterGrid6 != "" && this.caracterGrid4 == this.caracterGrid5 && this.caracterGrid4 == this.caracterGrid6 && this.caracterGrid5 == this.caracterGrid6) {
        console.log("Ganhou linha 2");
        this.playerVencedor = this.playerAtual;
        this.vencedor();
      } else if (this.caracterGrid7 != "" && this.caracterGrid8 != "" && this.caracterGrid9 != "" && this.caracterGrid7 == this.caracterGrid8 && this.caracterGrid7 == this.caracterGrid9 && this.caracterGrid8 == this.caracterGrid9) {
        console.log("Ganhou linha 3");
        this.playerVencedor = this.playerAtual;
        this.vencedor();
      } else if (this.caracterGrid1 != "" && this.caracterGrid4 != "" && this.caracterGrid7 != "" && this.caracterGrid1 == this.caracterGrid4 && this.caracterGrid1 == this.caracterGrid7 && this.caracterGrid4 == this.caracterGrid7) {
        console.log("Ganhou coluna 1");
        this.playerVencedor = this.playerAtual;
        this.vencedor();
      } else if (this.caracterGrid2 != "" && this.caracterGrid5 != "" && this.caracterGrid8 != "" && this.caracterGrid2 == this.caracterGrid5 && this.caracterGrid2 == this.caracterGrid8 && this.caracterGrid5 == this.caracterGrid8) {
        console.log("Ganhou coluna 2");
        this.playerVencedor = this.playerAtual;
        this.vencedor();
      } else if (this.caracterGrid3 != "" && this.caracterGrid6 != "" && this.caracterGrid9 != "" && this.caracterGrid3 == this.caracterGrid6 && this.caracterGrid3 == this.caracterGrid9 && this.caracterGrid6 == this.caracterGrid9) {
        console.log("Ganhou coluna 3");
        this.playerVencedor = this.playerAtual;
        this.vencedor();
      } else if (this.caracterGrid1 != "" && this.caracterGrid5 != "" && this.caracterGrid9 != "" && this.caracterGrid1 == this.caracterGrid5 && this.caracterGrid1 == this.caracterGrid9 && this.caracterGrid5 == this.caracterGrid9) {
        console.log("Ganhou Vertical 1");
        this.playerVencedor = this.playerAtual;
        this.vencedor();
      } else if (this.caracterGrid3 != "" && this.caracterGrid5 != "" && this.caracterGrid7 != "" && this.caracterGrid3 == this.caracterGrid5 && this.caracterGrid3 == this.caracterGrid7 && this.caracterGrid5 == this.caracterGrid7) {
        console.log("Ganhou Vertical 2");
        this.playerVencedor = this.playerAtual;
        this.vencedor();
      }
    }
  }

  definirCaracter(player1) {
    if (player1 === "X") {
      this.player2 = "0";
    } else {
      this.player2 = "X";
    }
  }

  async vencedor() {
    const alert = await this.alertController.create({
      header: 'Vitória!',
      message: 'O vencedor foi o ' + this.playerVencedor,
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.router.navigate(['home']);
          this.encerrarPartida();
        }
      }
      ]
    }
    );
    await alert.present();
    this.router.navigate(['home']);
    this.encerrarPartida();
  }

  async deuVelha() {
    const alert = await this.alertController.create({
      header: 'Deu Velha!',
      message: 'Nenhum dos dois Jogadores Ganhou!',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.router.navigate(['home']);
          this.encerrarPartida();
        }
      }
      ]
    });
    await alert.present();
    this.router.navigate(['home']);
    this.encerrarPartida();
  }

  encerrarPartida() {
    this.playerAtual = "Player 1";
    this.numeroJogada = 1;
    this.caracterGrid1 = "";
    this.caracterGrid2 = "";
    this.caracterGrid3 = "";
    this.caracterGrid4 = "";
    this.caracterGrid5 = "";
    this.caracterGrid6 = "";
    this.caracterGrid7 = "";
    this.caracterGrid8 = "";
    this.caracterGrid9 = "";
  }

  async valorJaIncluso() {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: 'Já foi jogado nesse local!',
      buttons: [{
        text: 'Ok',
        handler: () => {
        }
      }
      ]
    });
    await alert.present();
  }

  jogar(gridClicado) {
    this.defineCaracterRodada();
    this.setaValor(gridClicado);
    this.definirNumeroJogada();
    this.testaResultado();
    this.definirPlayerJogada();
  }

  verificaSetado(gridClicado) {
    if (gridClicado == 1) {
      if (this.caracterGrid1 != "") {
        this.valorJaIncluso();
      } else {
        this.jogar(gridClicado);
      }
    } else if (gridClicado == 2) {
      if (this.caracterGrid2 != "") {
        this.valorJaIncluso();
      } else {
        this.jogar(gridClicado);
      }
    } else if (gridClicado == 3) {
      if (this.caracterGrid3 != "") {
        this.valorJaIncluso();
      } else {
        this.jogar(gridClicado);
      }
    }
    else if (gridClicado == 4) {
      if (this.caracterGrid4 != "") {
        this.valorJaIncluso();
      } else {
        this.jogar(gridClicado);
      }
    } else if (gridClicado == 5) {
      if (this.caracterGrid5 != "") {
        this.valorJaIncluso();
      } else {
        this.jogar(gridClicado);
      }
    } else if (gridClicado == 6) {
      if (this.caracterGrid6 != "") {
        this.valorJaIncluso();
      } else {
        this.jogar(gridClicado);
      }
    } else if (gridClicado == 7) {
      if (this.caracterGrid7 != "") {
        this.valorJaIncluso();
      } else {
        this.jogar(gridClicado);
      }
    } else if (gridClicado == 8) {
      if (this.caracterGrid8 != "") {
        this.valorJaIncluso();
      } else {
        this.jogar(gridClicado);
      }
    } else if (gridClicado == 9) {
      if (this.caracterGrid9 != "") {
        this.valorJaIncluso();
      } else {
        this.jogar(gridClicado);
      }
    }
  }
}