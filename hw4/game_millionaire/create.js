function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function todefault(array, int) {
    array = [];
    for (let i = 0; i < int; i++) {
        array[i] = i;
    }
    array = shuffle(array);
    return array;
}
let create = {
    checkList: [],
    // session(easy, middle, hard) {
    session(lvl) {
        let easy = lvl[0],
            middle = lvl[1],
            hard = lvl[2];
        config.point_max = easy * config.point.easy + middle * config.point.middle + hard * config.point.hard;
        // for (let i = 0; i < easy; i++) {
        //     this.checkList[this.checkList.length] = generate.qwiz(questions.easy);
        // }
        // for (let i = 0; i < middle; i++) {
        //     this.checkList[this.checkList.length] = generate.qwiz(questions.middle);
        // }
        // for (let i = 0; i < hard; i++) {
        //     this.checkList[this.checkList.length] = generate.qwiz(questions.hard);
        // }
        // console.log("Игра сформирована");

        let randomick = [];

        randomick = todefault(randomick, questions.easy.length);
        for (let i = 0; i < easy; i++) {
            let j = randomick[i];
            this.checkList[this.checkList.length] = generate.qwiz(questions.easy, j);
        }
        randomick = todefault(randomick, questions.middle.length);
        for (let i = 0; i < middle; i++) {
            this.checkList[this.checkList.length] = generate.qwiz(questions.middle, randomick[i]);
        }
        randomick = todefault(randomick, questions.hard.length);
        for (let i = 0; i < hard; i++) {
            this.checkList[this.checkList.length] = generate.qwiz(questions.hard, randomick[i]);
        }


        //  for (let i = 0; i < this.checkList.length; i++) {
        generate.draw(this.checkList[0]);
        // }
    },
    levels(lvl) {
        switch (lvl) {
            case 1:

                return [5, 5, 2];
            case 2:

                return [4, 4, 4];
            case 3:

                return [3, 4, 6];
        }
    }

}