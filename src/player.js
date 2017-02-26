class Player {
  constructor(parent, id, x, y) {
    this.parent = parent;
    this.dungeon = parent.dungeon;
    this.id = id;
    this.x = x;
    this.y = y;
  }

  replaceAt(str, index, character) {
    return str.substr(0, index) + character + str.substr(index+character.length);
  }

  draw() {
    let map = [];
    for (let i = 0; i < this.dungeon.map.length; i++) {
      map.push(this.dungeon.map[i]);
    }
    try {
      map[this.y] = this.replaceAt(map[this.y], this.x, '@');
    } catch(err) {
      console.log(err);
    }
    console.log(map);
  }

  getInfo() {
    return this.dungeon.getInfo(this.x,this.y);
  }

  moveNorth() {
    let info = this.getInfo();
    if (!info.canGoNorth) {
      return false;
    }
    this.y--;
    return true;
  }

  moveSouth() {
    let info = this.getInfo();
    if (!info.canGoSouth) {
      return false;
    }
    this.y++;
    return true;
  }

  moveWest() {
    let info = this.getInfo();
    if (!info.canGoWest) {
      return false;
    }
    this.x--;
    return true;
  }

  moveEast() {
    let info = this.getInfo();
    if (!info.canGoEast) {
      return false;
    }
    this.x++;
    return true;
  }
}

export default Player;
