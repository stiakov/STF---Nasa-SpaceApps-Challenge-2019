const __ = require('./utils/labels');

module.exports = (bot) => {
  bot.start((ctx) => ctx.reply(__.MSG_WELCOME(ctx)));
  bot.help((ctx) => ctx.reply(__.MSG_HELP(ctx)));
}