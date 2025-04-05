import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import SendContactMailDto from './dto/send-contact-mail.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('send-contact-mail')
  sendEmail(@Body() sendContactMailDto: SendContactMailDto) {
    return this.appService.sendEmail(sendContactMailDto);
  }
}
