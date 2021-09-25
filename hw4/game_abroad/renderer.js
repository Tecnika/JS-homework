  let renderer = {
      map: "",
      // create map
      render() {
          for (let row = 0; row < config.rowsCount; row++) {
              for (let col = 0; col < config.colsCount; col++) {
                  if (player.y === row && player.x === col) {
                      this.map += config.player_icon;
                  } else {
                      this.map += config.map_icon;
                  }
              }
              this.map += '<br> ';
          }

          document.getElementById('map').innerHTML = (this.map);
          console.log("Поле отрисовано");

      },
      clear() {
          document.getElementById('map').innerHTML = "";
          this.map = "";
          console.log("Поле очищено");
      }
  };