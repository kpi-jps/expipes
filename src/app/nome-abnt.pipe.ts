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
  private checkIfValidChar(str : string, strIndex : number) : boolean {
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

  //Checa se uma "string" é válida de acordo comas regras da função "checkIfValidChar"
  private checkIfStrIsValid(str : string) : boolean {
    for (let i = 0; str.length; i++) {
      if(!this.checkIfValidChar(str, i)) {
        return false
      }
    }
  }

  //Converte uma string para o padrão de nomes ABNT
  private convertToABNT(input : string) : string {
    let output : string = '';
    let nome : string[] = input.split(' ');
    output += nome[nome.length-1].toUpperCase() + ', ' + nome[0] + ' ';
    for (let i = 1; i < nome.length-1; i++) {
      output += nome[i].slice(0,1) + '. ';
    }
    return output;
  }
  
  transform(input: string) : string  {
    if (input == '') { //checa se campo está vazio
      return "Inválido";
    }
    //checando se existe ao menos um nome separado por virgula
    else if(input.indexOf(',') == -1) { // se não existe
      let nome : string = input.trim();
      if(nome.indexOf(' ') == -1) {
        return "Inválido";
      } else {
        return this.convertToABNT(nome);
      }
    } else { //existe
      let output : string = '';
      let nomes : string [] = input.split(',');
      for (let i = 0; i < nomes.length; i++) {
        if (this.checkIfStrIsValid(nomes[i])) {
          output += "Inválido";
        } else {
          nomes[i] = nomes[i].trim();
          if(nomes[i].indexOf(' ') == -1) {
            output += "Inválido";
          } else {
            if (nomes.length > 3) {
              return this.convertToABNT(nomes[0]) + ' et al.'
            } else {
              if(i == 0) {
                output += this.convertToABNT(nomes[i]);
              } else {
                output += '; ' + this.convertToABNT(nomes[i]);
              }
            }
          }
        }
      }
      return output;
    }
  }
}
