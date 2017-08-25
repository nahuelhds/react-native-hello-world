// @flow
import Mailgun from 'mailgun.js'

const API_KEY: String = "key-740bf9828d2bf1134090e6b3f5cd2f74";
const DOMAIN: String = "sandbox965964606d6d4762bd42d5e5d187e425.mailgun.org";

export type EmailMessage = {
  from: String,
  to: Array,
  subject: String,
  message: String,
}

class EmailClient {
  client: *;

  constructor() {
    this.client = Mailgun.client({
      username: 'api',
      key: API_KEY
    })
  }

  message(message: EmailMessage) {
    this.client.messages.create(DOMAIN, message)
  }
}

const emailClient = new EmailClient

export default emailClient
