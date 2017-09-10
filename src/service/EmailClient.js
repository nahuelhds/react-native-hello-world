// @flow
import Frisbee from 'frisbee'
import lang from 'lang/main'
import MAILGUN from 'config/env'

export type EmailUserData = {
  email: String,
  name: String,
  message: String,
}

type EmailMessage = {
  from: String,
  to: Array<String>,
  subject: String,
  html: String,
  text?: String,
}

class EmailClient {
  api: *;

  constructor() {
    this.api = new Frisbee({
      baseURI: `https://api.mailgun.net/v3/${MAILGUN.DOMAIN}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      auth: ['api', MAILGUN.API_KEY],
    });
  }

  message(data: EmailUserData) {
    const message: EmailMessage = {
      from: `React Native Hello World <mailgun@${MAILGUN.DOMAIN}>`,
      to: "nsotelo@cristalmedia.net",
      subject: lang.t('email.subject'),
      html: '<h2>' + lang.t('email.title', data) + '</h2><p>' + lang.t('email.description', data) + '</p>',
      text: lang.t('email.title', data) + "\n" + lang.t('email.description', data),
    }

    return this.api.post('/messages', { body: encodeData(message) })
  }
}

function encodeData(json) {
  return Object.keys(json).map(function (key) {
    return encodeURIComponent(key) + '=' +
      encodeURIComponent(json[key]);
  }).join('&');
}

const emailClient = new EmailClient

export default emailClient
