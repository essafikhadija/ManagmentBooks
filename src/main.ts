import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from '@nestjs/common';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const options = new DocumentBuilder()
        .setTitle('books')
        .setDescription('The books API description')
        .setVersion('1.0')
        .addTag('books')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api_documentation', app, document);

    app.useGlobalPipes(new ValidationPipe());
    await app.listen(3000);
}

bootstrap();
