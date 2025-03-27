import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({ origin: 'http://localhost:3000', // Next.js のフロントエンドのURL
   credentials: true, // Cookieの送受信を許可 
   methods: ['GET', 'POST', 'PATCH', 'DELETE'], // 許可するHTTPメソッド 
   allowedHeaders: ['Content-Type', 'Authorization'], // 許可するヘッダー
    });
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();




  
  