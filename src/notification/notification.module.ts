import { Module } from '@nestjs/common';
import { SendContactMailListener } from './listeners/send-contact-mail.listener';

@Module({})
export class NotificationModule {
  providers: [SendContactMailListener];
}
