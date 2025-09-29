const readline = require('readline-sync');

const rows = 4;
const cols = 4;
let seats = Array(rows).fill().map(() => Array(cols).fill(false));

function showSeats() {
  console.clear();
  console.log('------Tela de cinema-------\n');


  let header = '     ';
  for (let c = 0; c < cols; c++) {
    header += ` C ${c + 1} `;
  }
  console.log(header);


  for (let r = 0; r < rows; r++) {
  let rowDisplay = `Lin ${r + 1} `;
  let isFull = true;

  for (let c = 0; c < cols; c++) {
    if (!seats[r][c]) isFull = false;
    rowDisplay += seats[r][c] ? '  #   ' : '  L   ';
  }

  if (isFull) {
    rowDisplay += ' ← LINHA COMPLETA';
  }

  console.log(rowDisplay);
}

  console.log('');
}

function askSeat() {
  let row, col;

  while (true) {
    row = readline.questionInt('Informe a linha da cadeira L1 a L4 (apenas numero): ') - 1;
    col = readline.questionInt('Informe a coluna da cadeira C1 a C4 (apenas numero): ') - 1;

    if (
      row >= 0 && row < rows &&
      col >= 0 && col < cols
    ) {
      if (!seats[row][col]) {
        seats[row][col] = true;
        console.log(`\n Cadeira [Linha ${row + 1}, Coluna ${col + 1}] comprada com sucesso!\n`);
        break;
      } else {
        console.log('\n cadeira ocupada. Escolha outra.\n');
      }
    } else {
      console.log('\n Posicao invalida. Tente novamente.\n');
    }
  }
}

function mainLoop() {
  while (true) {
    showSeats();
    askSeat();

    if (allSeatsTaken()) {
      showSeats();
      console.log('Todas as cadeiras foram ocupadas. Encerrando o programa...');
      break;
    }

    readline.question('Pressione ENTER para o proximo cliente...');
  }
}

function allSeatsTaken() {
  return seats.every(row => row.every(seat => seat));
}
mainLoop();