const config = {
    point_now: 0,
    point_max: 0,
    point: {
        easy: 100,
        middle: 300,
        hard: 500,
    },
    count: {
        easy: 4,
        middle: 3,
        hard: 2,
    },
    color: {
        true: "#508030",
        false: "#cc5500",
        default: "#6495ed",
    },
    sessionNumber: 0,
    levels: 0,
};
// };

(function() {
    var logger = document.getElementById('log');
    console.log = function() {
        let dates = new Date(); //= getDate() + "." + getMonth() + "." + getFullYear ()+ " " + getHours() + ":" + getMinutes() + ":" + getSeconds();


        let a = dates.getDate() + "." + dates.getMonth() + "." + dates.getFullYear() + " " + dates.getHours() + ":" + dates.getMinutes() + ":" + dates.getSeconds() + " | ";
        //hours + ":" + minutes + ":" + seconds;
        logger.innerHTML += a;
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] == 'object') {
                logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
            } else {
                logger.innerHTML += arguments[i] + '<br />';
            }
        }
    }
})();