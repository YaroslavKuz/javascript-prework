// Функція для отримання назви ходу за його id
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
      return 'kamień';
  } else if (argMoveId == 2) {
      return 'papier';
  } else if (argMoveId == 3) {
      return 'nożyce';
  } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
  }
}

// Функція для відображення результату гри на сторінці
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'kamień') {
    printMessage(' NIE Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'kamień') {
    printMessage('chmm... Jeszcze raz ');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

// Функція, яка викликається при натисканні на кнопку
function buttonClicked(argButtonName) {
  clearMessages(); // Очищаємо попередні повідомлення
  console.log(argButtonName + ' został kliknięty');
  
  var randomNumber = Math.floor(Math.random() * 3 + 1); // Випадковий хід комп'ютера
  var computerMove = getMoveName(randomNumber);
  var playerMove = argButtonName; // Хід гравця

  console.log('ruch gracza to: ' + playerMove);
  console.log('wylosowana liczba to: ' + randomNumber);
  console.log('ruch komputera to: ' + computerMove);

  // Визначаємо результат
  displayResult(playerMove, computerMove);
}

// Додаємо слухачі подій на кнопки
buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

// Призначаємо функцію для кожної кнопки
buttonRock.addEventListener('click', function() {
  buttonClicked('kamień');
});
buttonPaper.addEventListener('click', function() {
  buttonClicked('papier');
});
buttonScissors.addEventListener('click', function() {
  buttonClicked('nożyce');
});