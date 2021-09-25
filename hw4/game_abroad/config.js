const config = {
    rowsCount: 11,
    colsCount: 11,
    start_x: 5,
    start_y: 5,
    player_icon: '&#9632; ',
    map_icon: '&#9633; '
};

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