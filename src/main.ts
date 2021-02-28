import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ExceptionInterceptor } from './infrastructure/interceptors/exception.interceptor';
import * as compression from 'compression';
require('dotenv').config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalInterceptors(new ExceptionInterceptor());

  app.use(compression());

  await app.listen(3000);
}
bootstrap();
