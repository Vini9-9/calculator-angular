import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  display: string;
  operacao: String;
  total: number;
  permitNewNumber: boolean; 

  constructor() { 
    this.display = '0';
    this.operacao = '';
    this.total = 0;
    this.permitNewNumber = false;
  }

  ngOnInit(): void {
  }

  addDigito(botao:any) {
    const digito: string = botao.value;

    if(digito.includes('.') && this.display.includes('.')){
      return
    } 

    if(this.display == '0' || this.permitNewNumber){
      this.display = digito;
    } else {
      this.display = this.display + digito;
    }
  }

  limparMemoria() {
    this.display = '0';
    this.operacao = '';
  }

  setOperacao(operacao: string) {
    
    if(operacao.includes('=')) {
      this.total = eval(` ${this.total} ${this.operacao} ${this.display}`);
      this.showResult();
      return
    }
    this.saveOperacao(operacao);
  }

  saveOperacao(operacao: string) {
    this.operacao = operacao;
    this.total = parseFloat(this.display);
    this.permitNewNumber = true;
  }

  showResult() {
    this.display = `${this.total}`;
  }

}
