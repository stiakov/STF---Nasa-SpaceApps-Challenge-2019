const __ = require('./utils/labels');
const speech = require('./speech-to-text');

module.exports = (bot) => {
  bot.start(ctx => ctx.reply(__.MSG_WELCOME(ctx)));
  bot.help(ctx => ctx.reply(__.MSG_HELP(ctx)));

  bot.on('voice', ctx => {
    bot.telegram.getFileLink(ctx.message.voice.file_id)
      .then(url => {
        speech(ctx, url);
      })
  });
}