let game = {
    create() {
        document.getElementById('howlvl').style.visibility = 'hidden';
        document.getElementById('stop').style.visibility = 'hidden';
        document.getElementById('next').style.visibility = 'hidden';
        document.getElementById('block').style.visibility = 'hidden';
    },
    buttonopen(a) {
        let buttons = document.getElementsByClassName('ansver');
        if (a) {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = true;
                buttons[i].style.backgroundColor = config.color.default;
                buttons[i].style.color = "#000";
                // buttons[i].style.visibility = 'hidden';
            }
        } else {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = false;
                buttons[i].style.backgroundColor = config.color.default;
                // buttons[i].style.visibility = 'visible ';
            }
        }

    },
    swap() {
        if (document.getElementById('start').style.visibility == 'hidden') {
            document.getElementById('stop').style.visibility = 'hidden';
            document.getElementById('start').style.visibility = 'visible'
        } else {
            document.getElementById('start').style.visibility = 'hidden';
            document.getElementById('stop').style.visibility = 'visible'
        }
    },
    start() {
        document.getElementById('howlvl').style.visibility = 'hidden';
        document.getElementById('stop').style.visibility = 'visible';
        console.log("Игра запускается");
        this.buttonopen(false);
        document.getElementById('block').style.visibility = 'visible ';
        // this.swap();
        console.log("Игра запущена");
        document.getElementById("point").innerHTML = config.point_now;
        create.session(create.levels(config.levels));
    },
    run() {
        document.getElementById('howlvl').style.visibility = 'visible';
        document.getElementById('start').style.visibility = 'hidden';
    },
    stop() {
        this.buttonopen(true);
        this.create();
        this.swap();
        config.sessionNumber = 0;
        create.checkList = [];
        console.log("Игра Закончена");
        console.log("Счет: " + config.point_now + " из " + config.point_max);
        config.point_now = 0;
    },

    go(answer) {
        let val;
        console.log("Проверка ответа");
        switch (answer) {
            case 1:
                val = 'ansver1';

                break;
            case 2:
                val = 'ansver2';
                break;
            case 3:
                val = 'ansver3';
                break;
            case 4:
                val = 'ansver4';
                break;
        }
        let color;
        this.buttonopen(true);
        if (generate.trueAnswer(answer, create.checkList)) {
            color = config.color.true;
        } else {
            color = config.color.false;
        }

        document.getElementById("point").innerHTML = config.point_now + " / " + config.point_max;
        console.log("Баллы зачислены");
        document.getElementById(val).style.backgroundColor = color;
        val = '';
        document.getElementById('next').style.visibility = 'visible';

    },
    next() {
        if (config.sessionNumber + 1 < create.checkList.length) {
            config.sessionNumber++;
            this.buttonopen(false);
            let number = config.sessionNumber;
            generate.draw(create.checkList[number]);
            document.getElementById('next').style.visibility = 'hidden';
        } else {
            this.stop();
        }
    },
    submit_lvl() {
        document.getElementById('start').style.visibility = 'hidden';
        if (document.getElementById("lvl1").checked || document.getElementById("lvl2").checked || document.getElementById("lvl3").checked) {
            if (document.getElementById("lvl1").checked) {
                config.levels = 1;
            } else {
                if (document.getElementById("lvl2").checked) {
                    config.levels = 2;
                } else {
                    config.levels = 3;
                }
            }

            this.start();

        } else {
            console.log("Выберите  уровень сложности");
        }

    },
}
game.create();