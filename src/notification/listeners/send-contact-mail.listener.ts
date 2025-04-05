import { Injectable } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';
import { EventNotification } from 'src/types/notification.types'; // Ensure EventNotification is correctly defined and exported
import { SendContactMailEvent } from '../events/send-contact-mail.event';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class SendContactMailListener {
  constructor(private readonly emailService: MailService) {}

  @OnEvent(EventNotification.SendContactMail)
  async handleSendContactMail(event: SendContactMailEvent) {
    await this.emailService.sendContactMail(event.mailData);
  }
}
