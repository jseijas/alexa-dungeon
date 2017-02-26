'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dungeon = require('../lib/dungeon').default;

var BaseIntent = function () {
  function BaseIntent() {
    _classCallCheck(this, BaseIntent);
  }

  _createClass(BaseIntent, null, [{
    key: 'getMethod',
    value: function getMethod(player, location) {
      location = location.toLowerCase();
      switch (location) {
        case 'north':
          return player.moveNorth.bind(player);
        case 'south':
          return player.moveSouth.bind(player);
        case 'west':
          return player.moveWest.bind(player);
        case 'east':
          return player.moveEast.bind(player);
        default:
          return undefined;
      }
    }
  }, {
    key: 'move',
    value: function move(res, userId, location) {
      var player = dungeon.getPlayer(userId);
      var method = BaseIntent.getMethod(player, location);
      if (method) {
        if (!method()) {
          res.say('There is a wall at the ' + location + ', you cannot go there.');
        } else {
          res.say('You moved ' + location);
        }
      }
      player.draw();
      var info = player.getInfo();
      var infotext = dungeon.infoToText(info);
      res.say(infotext);
    }
  }]);

  return BaseIntent;
}();

exports.default = BaseIntent;