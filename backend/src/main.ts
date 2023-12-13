import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import { AppModule } from "./app.module";

import { PrismaService } from "./prisma/prisma.service";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const config = new ConfigService();

  app.enableCors({
    origin: "http://localhost:3000",
    credentials: true,
  });
  await app.listen(config.get<number>("PORT"));
  const primaService = app.get(PrismaService);
  await primaService.enableShutdownHooks(app);
}

bootstrap();
