const dungeon = require('../lib/dungeon').default;
const BaseIntent = require('../lib/base-intent').default;

class WestIntent {
  constructor(app) {
    this.name = 'westIntent';
    this.slots = {};
    this.utterances = require('./west-intent.json');
  }

  execute(req, res) {
    BaseIntent.move(res, req.data.session.user.userId, 'West');
    res.shouldEndSession(false);
  }
}

module.exports = WestIntent;
