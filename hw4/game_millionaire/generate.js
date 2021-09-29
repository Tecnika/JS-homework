function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function random(a1, b1, b2) {
    let a = getRandomInt(2);
    if (a == 1) {
        a1 = b1;
    } else {
        a1 = b2;
    }
    return (a1);
}
let generate = {
    // qwiz(lvl) {
    qwiz(lvl, a) {
        // generate_question(lvl) {
        let
        // a = getRandomInt(lvl.length),
            b, c, d, e;
        b = getRandomInt(4);
        c = getRandomInt(4);
        while (b == c) {
            c = getRandomInt(4);
        }
        // d = getRandomInt(4);
        // while (d == c || d == b) {
        //     d = getRandomInt(4);
        // }
        switch (b + c) {
            case 5:
                d = random(d, 0, 1);
                e = 6 - (b + c + d);
                break;
            case 4:
                d = random(d, 2, 0);
                e = 6 - (b + c + d);
                break;
            case 3:
                if (b == 0 | b == 3) {
                    d = random(d, 1, 2);
                    e = 6 - (b + c + d);
                } else {
                    d = random(d, 3, 0);
                    e = 6 - (b + c + d);;
                }
                break;
            case 2:
                d = random(d, 1, 3);
                e = 6 - (b + c + d);
                break;
            case 1:
                d = random(d, 3, 2);
                e = 6 - (b + c + d);
                break;

        };
        let mass = [lvl, a, b, c, d, e];
        return mass;
    },
    draw(info) {
        let lvl = info[0],
            number = info[1],
            quest = lvl[number];
        let a = config.sessionNumber + 1;
        document.getElementById("Num").innerHTML = a;
        document.getElementById("questions").innerHTML = quest.question;
        document.getElementById("ansver1").innerHTML = quest.ansver[info[2]];
        document.getElementById("ansver2").innerHTML = quest.ansver[info[3]];
        document.getElementById("ansver3").innerHTML = quest.ansver[info[4]];
        document.getElementById("ansver4").innerHTML = quest.ansver[info[5]];

        console.log("Вопрос №" + a + " задан");
    },
    trueAnswer(answer, logs) {
        let session = config.sessionNumber,
            sessionLogs = logs[session],
            true_answer, point = 0;
        for (let i = 2; i < 6; i++) {
            if (sessionLogs[i] == 0) {
                true_answer = i - 1;
            }
        }

        if (sessionLogs[0] == questions.easy) {
            point = config.point.easy;
        } else if (sessionLogs[0] == questions.middle) {
            point = config.point.middle;
        }
        if (sessionLogs[0] == questions.hard) {
            point = config.point.hard;
        }

        console.log("Ответ проверен");
        if (answer == true_answer) {

            console.log("Ответ верен");
            config.point_now+=point;
            console.log("+"+point+" Баллов");
            return true;
        } else {
            console.log("Ответ неверен");
            let val = '';
            switch (true_answer) {
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
            console.log("Правильный ответ подсвечен");
            document.getElementById(val).style.backgroundColor = config.color.true;
            return false;
        }
    }

}