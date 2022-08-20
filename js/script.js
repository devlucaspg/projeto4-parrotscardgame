let size;

startGame();

function startGame() {
    while (true) {
        size = prompt('Com quantas cartas quer jogar? Insira um número par entre 4 e 14:');
        if (size < 4 || size > 14 || size % 2 == 1) {
            alert('Por favor, insira um número par entre 4 e 14');
        } 
        else {
            break;
        }
    }
}