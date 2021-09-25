let mover = {
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 1:
                nextPosition.x--;
                nextPosition.y++;
                console.log("Идем налево вниз");
                break;
            case 2:
                nextPosition.y++;
                console.log("Идем вниз");
                break;
            case 3:
                nextPosition.x++;
                nextPosition.y++;
                console.log("Идем направо вниз");
                break;
            case 4:
                nextPosition.x--;
                console.log("Идем налево");
                break;
            case 6:
                nextPosition.x++;
                console.log("Идем направо");
                break;
            case 7:
                nextPosition.x--;
                nextPosition.y--;
                console.log("Идем налево вниз");
                break;
            case 8:
                nextPosition.y--;
                console.log("Идем вверх");
                break;
            case 9:
                nextPosition.x++;
                nextPosition.y--;
                console.log("Идем направо вверх");
                break;

        }
        return nextPosition;

    }
}