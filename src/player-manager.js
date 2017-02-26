import Player from './player';

class PlayerManager {
  constructor(parent, initialX, initialY) {
    this.dungeon = parent;
    this.players = {};
    this.initialX = initialX;
    this.initialY = initialY;
  }

  getPlayer(id) {
    let player = this.players[id];
    if (!player) {
      player = new Player(this, id, this.initialX, this.initialY);
      this.players[id] = player;
    }
    return player;
  }

  existsPlayer(id) {
    return (this.players[id] !== undefined);
  }
}

export default PlayerManager;
