import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  display: string;

  constructor() { 
    this.display = '0';
  }

  ngOnInit(): void {
  }

  addDigito(botao:any) {
    // window.alert('add Digito: ' + digito.textContent);
    const digito: string = botao.textContent;

    if(this.display == '0'){
      this.display = digito;
    } else {
      this.display = this.display + digito;
    }
  }

  limparMemoria() {
    this.display = '0';
  }

  setOperacao(operacao: String) {
    window.alert('Set operação: ' + operacao);
  }

}