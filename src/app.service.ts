import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Wor!';
  }
  getHello2(): string {
    return 'Hello World2!';
  }
  getHello3(): string {
    return 'Hello Takuya!';
  }
  getHello4(): string {
    let name = 'hello Takuya';
    name = 'narumi';
    return name;
  }
}
