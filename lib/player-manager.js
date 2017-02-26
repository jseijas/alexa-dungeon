'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = require('./player');

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlayerManager = function () {
  function PlayerManager(parent, initialX, initialY) {
    _classCallCheck(this, PlayerManager);

    this.dungeon = parent;
    this.players = {};
    this.initialX = initialX;
    this.initialY = initialY;
  }

  _createClass(PlayerManager, [{
    key: 'getPlayer',
    value: function getPlayer(id) {
      var player = this.players[id];
      if (!player) {
        player = new _player2.default(this, id, this.initialX, this.initialY);
        this.players[id] = player;
      }
      return player;
    }
  }, {
    key: 'existsPlayer',
    value: function existsPlayer(id) {
      return this.players[id] !== undefined;
    }
  }]);

  return PlayerManager;
}();

exports.default = PlayerManager;