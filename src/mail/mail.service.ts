import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import SendContactMailDto from 'src/dto/send-contact-mail.dto';
import { EventNotification } from 'src/types/notification.types';
import { emailModels, getTemplate } from './templates/data';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  sendContactMail(mailData: SendContactMailDto) {
    const { firstname, lastname, phone, subject, message, email } = mailData;

    const { subject: mainSubject, content } =
      emailModels[EventNotification.SendContactMail];

    const formattedContent = content
      .replaceAll('{fullname}', `${lastname + ' ' + firstname}`)
      .replaceAll('{phone}', phone)
      .replaceAll('{email}', email)
      .replaceAll('{message}', message);

    const htmlTemplate = getTemplate()
      .replaceAll('{content}', formattedContent)
      .replaceAll('{front_url}', this.configService.getOrThrow('FRONT_URL'))
      .replaceAll('{subject}', subject ?? '')
      .replaceAll('{year}', new Date().getFullYear().toString());

    console.log("La je m'apprete a envoyer le mail");

    this.mailerService
      .sendMail({
        to: this.configService.getOrThrow('SEND_MAIL_TO'),
        subject: mainSubject,
        html: htmlTemplate,
      })
      .then(() => {
        console.log('Mail *send Contact Email* sended successfull');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
