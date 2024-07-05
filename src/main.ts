import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function main() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Disciline RESTful API')
    .setDescription(
      ' Disciline adalah aplikasi Sistem Informasi Pelanggaran Siswa (SIPS) yang bertujuan untuk mencatat, mengelola, dan melaporkan pelanggaran yang dilakukan siswa di lingkungan sekolah.',
    )
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/documentation', app, document);

  app.use(helmet());
  app.use(cookieParser());
  app.enableCors({
    origin: true,
    credentials: true,
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);
}

main();
