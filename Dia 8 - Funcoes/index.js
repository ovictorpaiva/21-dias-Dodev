function calculadora(num1, num2, operacao){
  
    switch(operacao){
      case '+':
        return num1 + num2;
      break;
      case  '-':
        return num1 - num2;
      break;
      case '*':
        return num1 * num2;
      break;
      case "/":
        return num1 / num2
        break
      default:
        if (num2 != ''){
          console.log('Operação inválida!');
        }else {
          return num1;
        }
    }    
}