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

  constructor() { 
    this.display = '0';
    this.operacao = '';
    this.total = 0;
  }

  ngOnInit(): void {
  }

  addDigito(botao:any) {
    const digito: string = botao.textContent;

    if(digito.includes('.') && this.display.includes('.')){
      return
    } 

    if(this.display == '0'){
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
    this.display = '0';
  }

  showResult() {
    this.display = `${this.total}`;
  }

}
