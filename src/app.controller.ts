import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("hello")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("2")
  getHello2(): string {
    return this.appService.getHello();
  }
  @Get("3")
  getHello3(): string {
    return this.appService.getHello3();
  }
  @Get("4")
  getHello4(): string {
    return this.appService.getHello4();
  }
  @Get("5")
  getHello5(): string {
    return this.appService.getHello5();
  }}
