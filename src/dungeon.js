import fs from 'fs';
import PlayerManager from './player-manager';

class Dungeon {

  constructor() {
    this.width = 0;
    this.height = 0;
    this.loadMap();
    this.playerManager = new PlayerManager(this, 51, 18);
  }

  loadMap() {
    this.map = fs.readFileSync('./src/dungeon.txt', 'utf8').split('\n');
    this.height = this.map.length;
    for (let i = 0; i < this.map.length; i++) {
      let row = this.map[i];
      let s = '';
      for (let j = 0; j < row.length; j++) {
        if (j % 2 === 0) {
          s += row[j];
        }
      }
      this.map[i] = s;
      if (this.width === 0) {
        this.width = s.length;
      }
    }
  }

  getCell(x,y) {
    let cell = this.map[y][x];
    return this.map[y][x];
  }

  isValidCoordinate(x,y) {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
      return false;
    }
    return true;
  }

  canGoTo(x, y) {
    if (!this.isValidCoordinate(x, y)) {
      return false;
    }
    let cango = this.getCell(x, y) !== '#';
    return cango;
  }

  isExit(x, y) {
    if (!this.isValidCoordinate(x, y)) {
      return false;
    }
    return this.getCell(x, y) === 'E';
  }

  getInfo(x,y) {
    return {
      canGoNorth: this.canGoTo(x, y-1),
      canGoSouth: this.canGoTo(x, y+1),
      canGoWest: this.canGoTo(x-1, y),
      canGoEast: this.canGoTo(x+1, y),
      isExit: this.isExit(x, y)
    }
  }

  getPlayer(id) {
    return this.playerManager.getPlayer(id);
  }

  infoToText(info) {
    let options = [];
    if (info.canGoNorth) {
      options.push('North');
    }
    if (info.canGoSouth) {
      options.push('South');
    }
    if (info.canGoWest) {
      options.push('West');
    }
    if (info.canGoEast) {
      options.push('East');
    }
    if (options.length === 0) {
      return 'You are trapped! There are no exists';
    }
    if (options.length === 4) {
      return 'You can go anywhere you want';
    }
    if (options.length === 1) {
      return 'You can only go '+options[0];
    }
    let s = 'You can go to ';
    for (let i = 0; i < options.length; i++) {
      if (i === options.length-1) {
        s += ' or ';
      } else if (i > 0) {
        s += ', ';
      }
      s += options[i];
    }
    return s;
  }

}

let dungeon = new Dungeon();

export default dungeon;
