import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telBR'
})
export class TelBRPipe implements PipeTransform {
  
  //códigos tabela ascii 0 -> 9 =  48 -> 57
  //checa se caracter de uma string é um número
  checkIfNumber(str : string, strIndex : number) {
    if (str.charCodeAt(strIndex) >= 48 && str.charCodeAt(strIndex) <= 57) {
      return true;
    } else {
      return false;
    }
  }

  transform(tel: string): string  {
    if (tel.length > 13 || tel.length < 10 || tel == '') {
      return 'Inválido';
    } else {
      for (let i = 0; i < tel.length; i++){ 
        if(!this.checkIfNumber(tel, i)) {
          return "Inválido";
        }
      } 
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
