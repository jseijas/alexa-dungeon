const dungeon = require('../lib/dungeon').default;
const BaseIntent = require('../lib/base-intent').default;

class NorthIntent {
  constructor(app) {
    this.name = 'northIntent';
    this.slots = {};
    this.utterances = require('./north-intent.json');
  }

  execute(req, res) {
    BaseIntent.move(res, req.data.session.user.userId, 'North');
    res.shouldEndSession(false);
  }
}

module.exports = NorthIntent;
