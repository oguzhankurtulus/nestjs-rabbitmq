import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getOrder();
  }

  @Get('async')
  getHelloAsync() {
    return this.appService.getOrderAsync();
  }

  @Get('publish')
  publishEvent() {
    return this.appService.publishEvent();
  }
}
