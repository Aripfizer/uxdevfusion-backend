import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug'],
  });

  const configSvc: ConfigService = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({ origin: configSvc.getOrThrow<string>('ALLOWED_ORIGIN') });

  await app.listen(configSvc.getOrThrow<number>('API_PORT'));
  logger.log(`Api has started on ${configSvc.get<number>('API_PORT')}`);
}
bootstrap();
