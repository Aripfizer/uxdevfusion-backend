import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from './mail/mail.module';
import { NotificationModule } from './notification/notification.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter/dist/event-emitter.module';
import { SendContactMailListener } from './notification/listeners/send-contact-mail.listener';
import { MailService } from './mail/mail.service';

@Module({
  imports: [
    MailModule,
    NotificationModule,
    ConfigModule.forRoot({ isGlobal: true }),
    EventEmitterModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService, SendContactMailListener, MailService],
})
export class AppModule {}
