
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function start() {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule) 

    const config = new DocumentBuilder()
    .setTitle('Advanced NestJs backed API')
    .setDescription('REST API documentation')
    .setVersion('1.0.0')
    .addTag('Made by Dmitry Safarov')
    .build()

    // Swagger
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)
    // in case to limit access to all endpoints:
    // app.useGlobalGuards()

    await app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)
    )
}

start()