import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async sendLoginSuccessEmail(userEmail: string) {
    try {
      await this.transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: userEmail,
        subject: 'Successful Login',
        text: 'You have successfully signed in to your account.',
      });
    } catch (error) {
      console.error('Error sending success email:', error);
    }
  }

  async sendLoginAttemptWarning(userEmail: string) {
    try {
      await this.transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: userEmail,
        subject: 'Unauthorized Login Attempt',
        text: 'Someone tried to log in with incorrect credentials.',
      });
    } catch (error) {
      console.error('Error sending warning email:', error);
    }
  }
}
