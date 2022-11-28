const gameBoard = ((number) => {
    let deck = Array(9)

    const update = (number,player) => {
        deck[number] = player.getSymbol()
        return deck
        }

    const rejuvinateBoard = (deck) => {
        deck = 0
        return deck
    }
    
    return {update, deck, rejuvinateBoard}
})();


const displayController = (() => {
    const restartButton = () => {
        document.querySelector('.restart').addEventListener('click', () => {
        document.querySelectorAll('.box').forEach(item => {
            item.textContent = ''
        }) 
    })}

    const createNewGame = () => {
        document.querySelectorAll('.box').forEach(item => {
            item.textContent = ''
        gameBoard.rejuvinateBoard()
        })
        console.log(gameBoard.deck)
    }

    

    const checkForWin = () => {
        if ((gameBoard.deck[0] == 'X' && gameBoard.deck[1] == 'X' && gameBoard.deck[2] == 'X') ||
        (gameBoard.deck[3] == 'X' && gameBoard.deck[4] == 'X' && gameBoard.deck[5] == 'X') ||
        (gameBoard.deck[6] == 'X' && gameBoard.deck[7] == 'X' && gameBoard.deck[8] == 'X') ||
        (gameBoard.deck[0] == 'X' && gameBoard.deck[4] == 'X' && gameBoard.deck[8] == 'X') ||
        (gameBoard.deck[2] == 'X' && gameBoard.deck[4] == 'X' && gameBoard.deck[6] == 'X') ||
        (gameBoard.deck[0] == 'X' && gameBoard.deck[3] == 'X' && gameBoard.deck[6] == 'X') ||
        (gameBoard.deck[1] == 'X' && gameBoard.deck[4] == 'X' && gameBoard.deck[7] == 'X') ||
        (gameBoard.deck[2] == 'X' && gameBoard.deck[5] == 'X' && gameBoard.deck[8] == 'X')) {
            document.querySelector('.picksym').textContent = 'Winner: Player 1'
            createNewGame()
        } else if ((gameBoard.deck[0] == 'O' && gameBoard.deck[1] == 'O' && gameBoard.deck[2] == 'O') ||
        (gameBoard.deck[3] == 'O' && gameBoard.deck[4] == 'O' && gameBoard.deck[5] == 'O') ||
        (gameBoard.deck[6] == 'O' && gameBoard.deck[7] == 'O' && gameBoard.deck[8] == 'O') ||
        (gameBoard.deck[0] == 'O' && gameBoard.deck[4] == 'O' && gameBoard.deck[8] == 'O') ||
        (gameBoard.deck[2] == 'O' && gameBoard.deck[4] == 'O' && gameBoard.deck[6] == 'O') ||
        (gameBoard.deck[0] == 'O' && gameBoard.deck[3] == 'O' && gameBoard.deck[6] == 'O') ||
        (gameBoard.deck[1] == 'O' && gameBoard.deck[4] == 'O' && gameBoard.deck[7] == 'O') ||
        (gameBoard.deck[2] == 'O' && gameBoard.deck[5] == 'O' && gameBoard.deck[8] == 'O')) {
            document.querySelector('.picksym').textContent = 'Winner: Player 1'
            createNewGame()
        } else if (!gameBoard.deck.includes(undefined)) {
            document.querySelector('.picksym').textContent = 'Tie'
            createNewGame()
        }
    }

    const buttonClick = () => {
        let bootlean = false
        document.querySelectorAll('.box').forEach(item => {
            item.addEventListener('click', event => {
        
            if (!bootlean && item.textContent === '') {
              gameBoard.update(item.getAttribute('id'), player1)
              item.textContent = gameBoard.deck[item.getAttribute('id')]
              bootlean = true
              console.log(gameBoard.deck)
              checkForWin()
            } else if (item.textContent === '') {
                gameBoard.update(item.getAttribute('id'), bot)
                item.textContent = gameBoard.deck[item.getAttribute('id')]
                bootlean = false
                console.log(gameBoard.deck)
                checkForWin()
            }

            })
          })
    }

    

    return {buttonClick, checkForWin, restartButton, createNewGame}
})();

const player = (name, symbol) => {
    const getName = () => name;
    const getSymbol = () => symbol;

    return {getName, getSymbol}
}

const player1 = player('player1', 'X')
const bot = player('bot', 'O')

displayController.buttonClick()
displayController.restartButton()
