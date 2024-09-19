import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global Validation Pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip properties that do not have any decorators
      forbidNonWhitelisted: true, // Throw errors on non-whitelisted properties
      transform: true, // Automatically transform payloads to DTO instances
    }),
  );

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('User CRUD API')
    .setDescription('API documentation for User CRUD operations')
    .setVersion('1.0')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3009);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
