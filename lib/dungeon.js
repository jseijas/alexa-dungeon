'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _playerManager = require('./player-manager');

var _playerManager2 = _interopRequireDefault(_playerManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dungeon = function () {
  function Dungeon() {
    _classCallCheck(this, Dungeon);

    this.width = 0;
    this.height = 0;
    this.loadMap();
    this.playerManager = new _playerManager2.default(this, 51, 18);
  }

  _createClass(Dungeon, [{
    key: 'loadMap',
    value: function loadMap() {
      this.map = _fs2.default.readFileSync('./src/dungeon.txt', 'utf8').split('\n');
      this.height = this.map.length;
      for (var i = 0; i < this.map.length; i++) {
        var row = this.map[i];
        var s = '';
        for (var j = 0; j < row.length; j++) {
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
  }, {
    key: 'getCell',
    value: function getCell(x, y) {
      var cell = this.map[y][x];
      return this.map[y][x];
    }
  }, {
    key: 'isValidCoordinate',
    value: function isValidCoordinate(x, y) {
      if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
        return false;
      }
      return true;
    }
  }, {
    key: 'canGoTo',
    value: function canGoTo(x, y) {
      if (!this.isValidCoordinate(x, y)) {
        return false;
      }
      var cango = this.getCell(x, y) !== '#';
      return cango;
    }
  }, {
    key: 'isExit',
    value: function isExit(x, y) {
      if (!this.isValidCoordinate(x, y)) {
        return false;
      }
      return this.getCell(x, y) === 'E';
    }
  }, {
    key: 'getInfo',
    value: function getInfo(x, y) {
      return {
        canGoNorth: this.canGoTo(x, y - 1),
        canGoSouth: this.canGoTo(x, y + 1),
        canGoWest: this.canGoTo(x - 1, y),
        canGoEast: this.canGoTo(x + 1, y),
        isExit: this.isExit(x, y)
      };
    }
  }, {
    key: 'getPlayer',
    value: function getPlayer(id) {
      return this.playerManager.getPlayer(id);
    }
  }, {
    key: 'infoToText',
    value: function infoToText(info) {
      var options = [];
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
        return 'You can only go ' + options[0];
      }
      var s = 'You can go to ';
      for (var i = 0; i < options.length; i++) {
        if (i === options.length - 1) {
          s += ' or ';
        } else if (i > 0) {
          s += ', ';
        }
        s += options[i];
      }
      return s;
    }
  }]);

  return Dungeon;
}();

var dungeon = new Dungeon();

exports.default = dungeon;