class NotificationChannel {
  send(message, recipient) {
    throw new Error("send() must be implemented");
  }
}

class EmailNotification extends NotificationChannel {
  send(message, emailAddress) {
    if (!emailAddress) throw new Error("Email required");
    console.log(`Sending EMAIL to ${emailAddress}: ${message}`);
  }
}

class SMSNotification extends NotificationChannel {
  send(message, phoneNumber) {
    if (!phoneNumber) throw new Error("Phone number required");
    console.log(`Sending SMS to ${phoneNumber}: ${message}`);
  }
}

class TelegramNotification extends NotificationChannel {
  send(message, telegramId) {
    if (!telegramId) throw new Error("Telegram ID required");
    console.log(`Sending Telegram to ${telegramId}: ${message}`);
  }
}

class NotificationSender {
  constructor(channel) {
    this.channel = channel;
  }

  send(message, recipient) {
    this.channel.send(message, recipient);
  }
}

const n1 = new NotificationSender(new EmailNotification());
n1.send("Hello!", "nexus@email.com");

const n2 = new NotificationSender(new SMSNotification());
n2.send("Hi!", "1234567890");

const n3 = new NotificationSender(new TelegramNotification());
n3.send("Yo!", "telegram_user_42");
