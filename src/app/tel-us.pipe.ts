import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telUS'
})
export class TelUSPipe implements PipeTransform {
  //códigos tabela ascii A -> Z =  65 -> 90
  //códigos tabela ascii A -> Z =  97 -> 122
  //códigos tabela ascii 0 -> 9 =  48 -> 57
  //checa se caracter de uma string é um número
  checkIfNumber(str : string, strIndex : number) {
    if (str.charCodeAt(strIndex) >= 48 && str.charCodeAt(strIndex) <= 57) {
      return true;
    } else {
      return false;
    }
  }
  //checa se caracter de uma string é uma letra
  checkIfLetter(str : string, strIndex : number) {
    if ((str.charCodeAt(strIndex) >= 65 && str.charCodeAt(strIndex) <= 90) || (str.charCodeAt(strIndex) >= 97 && str.charCodeAt(strIndex) <= 122) ) {
      return true;
    } else {
      return false;
    }
  }
  //converte letras em números
  letterToNumber(str : string) {
    let s = str.toUpperCase();
    let output = '';
    for (let c of s) {
      if(c == 'A' || c == 'B' || c == 'C') {
        output += '2';
      } else if (c == 'D' || c == 'E' || c == 'F') {
        output += '3';
      } else if (c == 'G' || c == 'H' || c == 'I') {
        output += '4';
      } else if (c == 'J' || c == 'K' || c == 'L') {
        output += '5';
      } else if (c == 'M' || c == 'N' || c == 'O') {
        output += '6';
      } else if (c == 'P' || c == 'Q' || c == 'R' || c == 'S') {
        output += '7';
      } else if (c == 'T' || c == 'U' || c == 'V') {
        output += '8';
      } else if (c == 'W' || c == 'X' || c == 'Y' || c == 'Z') {
        output += '9';
      } else {
        output += c;
      }
    }
    return output;
  }
  transform(tel: string): string  {
    if (tel.length > 13 || tel.length < 10 || tel == '') {
      return 'Inválido';
    } else {
      for (let i = 0; i < tel.length; i++){ 
        if(!this.checkIfNumber(tel, i) && !this.checkIfLetter(tel, i)) {
          return "Inválido";
        }
      } 
      tel = this.letterToNumber(tel);
      switch(tel.length) {
        case 10:
          return '(' + tel.slice(0, 2) + ') ' + tel.slice(2, 6) + '-' + tel.slice(6, 10);
        case 11: 
          return '(' + tel.slice(0, 2) + ') ' + tel.slice(2, 3) + ' ' + tel.slice(3, 7) + '-' + tel.slice(7, 11);
        case 12: 
          return '+' + tel.slice(0, 2) + ' (' + tel.slice(2,4) + ') ' + tel.slice(4,8) + '-' + tel.slice(8, 12);
        case 13: 
          return '+' + tel.slice(0, 2) + ' (' + tel.slice(2,4) + ') ' + ' ' + tel.slice(4, 5) + ' ' +tel.slice(5, 9) + '-' + tel.slice(9, 13);
      }
    }
  }
}
