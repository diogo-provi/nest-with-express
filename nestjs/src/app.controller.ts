import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/v2')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/v2/express')
  getHelloExpress(): string {
    return 'Hello World from Express!'
  }
}
