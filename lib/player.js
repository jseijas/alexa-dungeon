'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
  function Player(parent, id, x, y) {
    _classCallCheck(this, Player);

    this.parent = parent;
    this.dungeon = parent.dungeon;
    this.id = id;
    this.x = x;
    this.y = y;
  }

  _createClass(Player, [{
    key: 'replaceAt',
    value: function replaceAt(str, index, character) {
      return str.substr(0, index) + character + str.substr(index + character.length);
    }
  }, {
    key: 'draw',
    value: function draw() {
      var map = [];
      for (var i = 0; i < this.dungeon.map.length; i++) {
        map.push(this.dungeon.map[i]);
      }
      try {
        map[this.y] = this.replaceAt(map[this.y], this.x, '@');
      } catch (err) {
        console.log(err);
      }
      console.log(map);
    }
  }, {
    key: 'getInfo',
    value: function getInfo() {
      return this.dungeon.getInfo(this.x, this.y);
    }
  }, {
    key: 'moveNorth',
    value: function moveNorth() {
      var info = this.getInfo();
      if (!info.canGoNorth) {
        return false;
      }
      this.y--;
      return true;
    }
  }, {
    key: 'moveSouth',
    value: function moveSouth() {
      var info = this.getInfo();
      if (!info.canGoSouth) {
        return false;
      }
      this.y++;
      return true;
    }
  }, {
    key: 'moveWest',
    value: function moveWest() {
      var info = this.getInfo();
      if (!info.canGoWest) {
        return false;
      }
      this.x--;
      return true;
    }
  }, {
    key: 'moveEast',
    value: function moveEast() {
      var info = this.getInfo();
      if (!info.canGoEast) {
        return false;
      }
      this.x++;
      return true;
    }
  }]);

  return Player;
}();

exports.default = Player;