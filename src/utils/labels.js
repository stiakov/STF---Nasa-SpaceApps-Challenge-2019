const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  MSG_WELCOME: ctx => ctx.i18n.t(process.env.MSG_WELCOME),
  MSG_HELP: ctx => ctx.i18n.t(process.env.MSG_HELP)
}