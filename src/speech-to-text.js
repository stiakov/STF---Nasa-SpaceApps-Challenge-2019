const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path')
const download = require('download-file');
const googleSpeech = require('@google-cloud/speech');

dotenv.config();

module.exports = (ctx, url) => {
  return download(
    url,
    {
      directory: path.resolve(__dirname, process.env.PATH_TMP),
      filename: process.env.VAL_VOICE
    },
    async err => {
      if(err) return;
      const client = new googleSpeech.SpeechClient();
      const file = fs.readFileSync(
        path.resolve(__dirname, `${ process.env.PATH_TMP }/${ process.env.VAL_VOICE }`));
      ctx.replyWithVoice({
        source: file.buffer
      })
      // const audioBytes = file.toString(process.env.VAL_FILE_BASE);
      
      // // The audio file's encoding, sample rate in hertz, and BCP-47 language code
      // const audio = {
      //   content: audioBytes,
      // };
      // const config = {
      //   encoding: process.env.VAL_FILE_ENCODING,
      //   sampleRateHertz: process.env.VAL_FILE_SAMPLE_RATE_HERTZ,
      //   languageCode: process.env.VAL_FILE_LANGUAGE_CODE
      // };
      // const request = {
      //   audio: audio,
      //   config: config,
      // };
    
      // // Detects speech in the audio file
      // const [response] = await client.recognize(request).then(val => {
      //   console.log(val);
      // });
    });
}