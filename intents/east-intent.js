const dungeon = require('../lib/dungeon').default;
const BaseIntent = require('../lib/base-intent').default;

class EastIntent {
  constructor(app) {
    this.name = 'eastIntent';
    this.slots = {};
    this.utterances = require('./east-intent.json');
  }

  execute(req, res) {
    BaseIntent.move(res, req.data.session.user.userId, 'East');
    res.shouldEndSession(false);
  }
}

module.exports = EastIntent;
