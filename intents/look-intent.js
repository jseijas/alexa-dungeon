const dungeon = require('../lib/dungeon').default;
const BaseIntent = require('../lib/base-intent').default;

class LookIntent {
  constructor(app) {
    this.name = 'lookIntent';
    this.slots = {};
    this.utterances = require('./look-intent.json');
  }

  execute(req, res) {
    BaseIntent.move(res, req.data.session.user.userId, '');
    res.shouldEndSession(false);
  }
}

module.exports = LookIntent;
