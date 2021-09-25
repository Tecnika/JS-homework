let game = {
    buttonopen(a) {
        let buttons = document.getElementsByClassName('ansver');
        if (a) {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = true;
                buttons[i].style.backgroundColor = config.color.default;
                buttons[i].style.visibility = 'hidden';
            }
        } else {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = false;
                buttons[i].style.backgroundColor = config.color.default;
                buttons[i].style.visibility = 'visible ';
            }
        }

    },
    run() {
        console.log("Игра запускается");
        this.buttonopen(false);
        document.getElementById('questions').style.visibility = 'visible ';
        document.getElementById('next').style.visibility = 'hidden';

        document.getElementById('stop').disabled = false;
        document.getElementById('start').disabled = true;
        console.log("Игра запущена");
        create.session(1, 1, 1);
        // create.session(create.lvl(config.levels));
    },
    stop() {
        this.buttonopen(true);
        document.getElementById('next').style.visibility = 'hidden';
        document.getElementById('stop').disabled = true;
        document.getElementById('start').disabled = false;
        document.getElementById('questions').style.visibility = 'hidden ';
        config.sessionNumber = 0;
        // create.checkList = [];
        console.log("Игра Закончена")
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
        let buttons = document.getElementsByClassName('ansver');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
            buttons[i].style.color = "#fff";
        }
        if (generate.trueAnswer(answer, create.checkList)) {
            color = config.color.true;
        } else {
            color = config.color.false;
        }

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
    // submit_lvl() {
    //     if (document.getElementById("lvl1").checked || document.getElementById("lvl2").checked || document.getElementById("lvl3").checked) {
    //         if (document.getElementById("lvl1").checked) {
    //             config.levels = 1;
    //         } else {
    //             if (document.getElementById("lvl2").checked) {
    //                 config.levels = 2;
    //             } else {
    //                 config.levels = 2;
    //             }
    //         }
    //         document.getElementById('start').disabled = false;
    //     } else {
    //         console.log("Выберите  уровень сложности");
    //     }

    // },
}