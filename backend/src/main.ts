import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import {PrismaService} from "./prisma/prisma.service";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });
  await app.listen(8000);
  const primaService = app.get(PrismaService);
  await primaService.enableShutdownHooks(app);
}

bootstrap();
