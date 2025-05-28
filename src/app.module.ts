import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './config/typeorm.config';
import { TodoModule } from './todos/todos.module';
import { NewsModule } from './news/news.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    TodoModule,
    NewsModule,
    TypeOrmModule.forRoot(AppDataSource.options),
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
