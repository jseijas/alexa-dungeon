const dungeon = require('../lib/dungeon').default;

class BaseIntent {

  static getMethod(player, location) {
    location = location.toLowerCase();
    switch (location) {
      case 'north': return player.moveNorth.bind(player);
      case 'south': return player.moveSouth.bind(player);
      case 'west': return player.moveWest.bind(player);
      case 'east': return player.moveEast.bind(player);
      default: return undefined;
    }
  }

  static move(res, userId, location) {
    let player = dungeon.getPlayer(userId);
    let method = BaseIntent.getMethod(player, location);
    if (method) {
      if (!method()) {
        res.say('There is a wall at the '+location+', you cannot go there.');
      } else {
        res.say('You moved '+location);
      }
    }
    player.draw();
    let info = player.getInfo();
    let infotext = dungeon.infoToText(info);
    res.say(infotext);
  }
}

export default BaseIntent;
