const dotenv = require('dotenv');
const Telegraf = require('telegraf');
const TelegrafI18n = require('telegraf-i18n')
const path = require('path');
const botEndPoints = require('./src/bot');

dotenv.config();

const i18n = new TelegrafI18n({
  defaultLanguage: process.env.VAL_FILE_LANGUAGE_CODE,
  allowMissing: false,
  directory: path.resolve(__dirname, process.env.PATH_LOCALES)
});

const bot = new Telegraf( process.env.TOKEN_BOT );

bot.use(i18n.middleware());

botEndPoints(bot);

bot.launch();