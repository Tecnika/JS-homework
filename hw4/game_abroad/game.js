let game = {
    /*
    Запускает игру.*/
    run() {
        console.log("Игра запускается");
        let buttons = document.getElementsByClassName('navigation');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
        }
        document.getElementById('start').disabled = true;
        console.log("Игра запущена");
        document.getElementById('text').innerHTML = "Baшe положение на поле в виде " + config.player_icon + '.';
        renderer.render();
    },
    go(direction) {
        // const direction = mover.getDirection();
        const nextPoint = mover.getNextPosition(direction);
        renderer.clear();
        player.move(nextPoint);
        renderer.render();

    },
    stop() {
        var buttons = document.getElementsByClassName('navigation');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
        document.getElementById('start').disabled = false;
        console.log("Игра остановлена")
    },
    // ЭТОТ метод выполняется при ОТКРЫТИИ страницы.
    init() {
        // document.getElementById('text').innerHTML = "Baшe положение на поле в виде о.";
        // renderer.render();
        document.getElementById('text2').innerHTML = 'Нажмите кнопку "Начать игру ".';

    }
};

game.init();