let create = {
    checkList: [],
    session(easy, middle, hard) {
        // session(lvl) {
        //         let easy = lvl[0],
        //             middle = lvl[1],
        //             hard = lvl[2];
        for (let i = 0; i < easy; i++) {
            this.checkList[this.checkList.length] = generate.qwiz(questions.easy);


        }
        for (let i = 0; i < middle; i++) {
            this.checkList[this.checkList.length] = generate.qwiz(questions.hard);
        }
        for (let i = 0; i < hard; i++) {
            this.checkList[this.checkList.length] = generate.qwiz(questions.hard);
        }
        console.log("Игра сформирована");


        //  for (let i = 0; i < this.checkList.length; i++) {
        generate.draw(this.checkList[0]);
        // }
    },
    // levels(lvl) {
    //     switch (lvl) {
    //         case 1:

    //             return [5, 5, 2];
    //         case 2:

    //             return [4, 4, 4];
    //         case 3:

    //             return [3, 4, 6];
    //     }
    // }

}