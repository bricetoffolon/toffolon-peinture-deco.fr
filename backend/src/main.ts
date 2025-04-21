import { NestFactory } from "@nestjs/core";
import {NestExpressApplication} from "@nestjs/platform-express";
import { ConfigService } from "@nestjs/config";
import { AppModule } from "./app.module";

import { PrismaService } from "./prisma/prisma.service";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new ConfigService();

  app.set('trust proxy', 'loopback');
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: config.get<string>("ALLOWED_ORIGIN"),
    credentials: true,
  });
  await app.listen(config.get<number>("PORT"), '0.0.0.0');
  app.get(PrismaService);
}

bootstrap();
