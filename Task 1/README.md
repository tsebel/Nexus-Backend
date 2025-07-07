1.Single Responsibility Principle (SRP) the Notification class is trying to do too many jobs at once. It handles email, SMS, and Telegram notifications all by itself, instead of letting each type handle its own job.

2.Open/Closed Principle (OCP) to add a new notification type like WhatsApp, we have to go back and modify the existing send method. This means the class is not open for extension but open for modification, which is risky.

3.Liskov Substitution Principle (LSP) subclasses can’t correctly replace the parent class because the parent forces them to deal with data they don’t need. We also can’t easily swap notification types because they don’t follow a shared structure.

4.Interface Segregation Principle (ISP) the send method forces us to pass all kinds of parameters even when we only need one. For example, email notifications still receive phone numbers and telegram IDs even though they don’t use them.

5.Dependency Inversion Principle (DIP) the Notification class directly depends on specific notification types and how they work. There is no abstraction, so the high-level logic is tightly connected to the low-level details.

