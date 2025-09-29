const readline = require('readline-sync');

let matriz = [];

console.log(' Informe os valores para a matriz 3x3:');
for (let i = 0; i < 3; i++) {
  matriz[i] = [];
  for (let j = 0; j < 3; j++) {
    let valor = readline.questionInt(` Valor para posicao [${i + 1}, ${j + 1}]: `);
    matriz[i][j] = valor;
  }
}


function mostrarMatriz() {
  console.log('\n Matriz informada:');
  for (let i = 0; i < 3; i++) {
    console.log(matriz[i].join(' | '));
  }
  console.log('');
}


function somarLinha1() {
  let soma = matriz[0].reduce((acc, val) => acc + val, 0);
  console.log(` Soma da linha 1: ${soma}`);
}

function multiplicarDiagonal() {
  let produto = 1;
  for (let i = 0; i < 3; i++) {
    produto *= matriz[i][i];
  }
  console.log(` Multiplicacao diagonal: ${produto}`);
}

function contarPares() {
  let pares = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (matriz[i][j] % 2 === 0) pares++;
    }
  }
  console.log(`Total de numeros pares: ${pares}`);
}


while (true) {
  mostrarMatriz();
  let opcao = readline.questionInt('Escolha uma opcao (1- Soma linha 1, 2- Multiplicar diagonal, 3- Contar pares, 4- Sair): ');

  switch (opcao) {
    case 1:
      somarLinha1();
      break;
    case 2:
      multiplicarDiagonal();
      break;
    case 3:
      contarPares();
      break;
    case 4:
      console.log('Fim do programa...');
      process.exit();
    default:
      console.log('Opcao invalida. Tente novamente.');
  }

  readline.question('\n Pressione ENTER para continuar...');
  console.clear();
}