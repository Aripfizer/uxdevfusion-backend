import { Injectable } from '@nestjs/common';
import sendContactMailDto from './dto/send-contact-mail.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { SendContactMailEvent } from './notification/events/send-contact-mail.event';
import { EventNotification } from './types/notification.types';

@Injectable()
export class AppService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  getHello(): string {
    return 'Hello World!';
  }

  sendEmail(data: sendContactMailDto) {
    const sendContactMailEvent: SendContactMailEvent =
      new SendContactMailEvent();

    sendContactMailEvent.mailData = data;

    this.eventEmitter.emit(
      EventNotification.SendContactMail,
      sendContactMailEvent,
    );

    return {
      message: 'Votre message a bien été envoyer',
    };
  }
}
