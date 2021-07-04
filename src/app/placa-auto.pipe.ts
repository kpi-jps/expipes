import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placaAuto'
})
export class PlacaAutoPipe implements PipeTransform {
  //códigos tabela ascii A -> Z =  65 -> 90
  //códigos tabela ascii A -> Z =  97 -> 122
  //códigos tabela ascii 0 -> 9 =  48 -> 57
  //checa se caracter de uma string é um número
  checkIfNumber(str : string, strIndex : number) : boolean {
    if (str.charCodeAt(strIndex) >= 48 && str.charCodeAt(strIndex) <= 57) {
      return true;
    } else {
      return false;
    }
  }
  //checa se caracter de uma string é uma letra
  checkIfLetter(str : string, strIndex : number) : boolean {
    if ((str.charCodeAt(strIndex) >= 65 && str.charCodeAt(strIndex) <= 90) || (str.charCodeAt(strIndex) >= 97 && str.charCodeAt(strIndex) <= 122) ) {
      return true;
    } else {
      return false;
    }
  }
  transform(placa: string): string {
    if (placa.length > 7 || placa == '') {
      return 'Inválido';
    } else {
      for (let i = 0; i < placa.length; i++){
        if (i < 3) {
          if(!this.checkIfLetter(placa, i)) {
            return 'Inválido';
          }
        } else {
          if(!this.checkIfNumber(placa, i)) {
            return 'Inválido';
          }
        }
      } 
      return (placa.slice(0, 3) + '-' + placa.slice(3, 7)).toUpperCase();
    }
  }

}
