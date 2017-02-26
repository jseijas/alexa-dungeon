const dungeon = require('../lib/dungeon').default;
const BaseIntent = require('../lib/base-intent').default;

class SouthIntent {
  constructor(app) {
    this.name = 'southIntent';
    this.slots = {};
    this.utterances = require('./south-intent.json');
  }

  execute(req, res) {
    BaseIntent.move(res, req.data.session.user.userId, 'South');
    res.shouldEndSession(false);
  }
}

module.exports = SouthIntent;
