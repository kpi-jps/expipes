import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomeABNT'
})
export class NomeABNTPipe implements PipeTransform {
  //códigos tabela ascii A -> Z =  65 -> 90
  //códigos tabela ascii A -> Z =  97 -> 122
  //códigos tabela ascii 0 -> 9 =  48 -> 57
  //códigos tabela ascii: "," = 44, " "(espaço) = 32, "á" = 225
  //"ã" = 227, "é" = 233, "ê" = 234, "í = 237, "ó" = 243, "ô" = 244, "ú" = 250 
  
  //checa se caracter de uma string é válido, ou seja, apenas letras e os seguintes caracteres
  // ",", " "(espaço),"ã", á, "é", "ê", "í", "ó", "ô", "ú", 
  checkIfValidChar(str : string, strIndex : number) {
    if (str.charCodeAt(strIndex) >= 65 && str.charCodeAt(strIndex) <= 90) {
      return true;
    } else if (str.charCodeAt(strIndex) >= 97 && str.charCodeAt(strIndex) <= 122) {
      return true;
    } else if (str.charCodeAt(strIndex) == 44) { //se ","
      return true;
    } else if (str.charCodeAt(strIndex) == 32) { //se " "(espaço)
      return true;
    } else if (str.charCodeAt(strIndex) == 225) { //se "ã"
      return true;
    } else if (str.charCodeAt(strIndex) == 227) { //se "á"
      return true;
    } else if (str.charCodeAt(strIndex) == 233) { //se "é"
      return true;
    } else if (str.charCodeAt(strIndex) == 234) { //se "ê"
      return true;
    } else if (str.charCodeAt(strIndex) == 237) { //se "í"
      return true;
    } else if (str.charCodeAt(strIndex) == 243) { //se "ó"
      return true;
    } else if (str.charCodeAt(strIndex) == 244) { //se "ô"
      return true;
    } else if (str.charCodeAt(strIndex) == 250) { //se "ú"
      return true;
    } else {
      return false;
    }
  }
  transform(input: string): string  {
    for (let i = 0; i < input.length; i++) {
      if (!this.checkIfValidChar(input, i)) {
        return "Inválido"
      }
    }
    //checando se existe ao menos um nome separado por virgula
    if(input.indexOf(',') == -1) { // se não existe
      let nome = input;
      console.log(input);
    } else { //existe
      let nomes = input.split(',');
      for (let i = 0; i < nomes.length; i++) {
        console.log(nomes[i].split(' '));
      }
      console.log(nomes);
    }
    return "válido";
  }

}
