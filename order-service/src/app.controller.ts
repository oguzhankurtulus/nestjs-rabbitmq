import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'order' })
  getOrderMessage(name: string): string {
    return `Order ${name}`;
  }

  @MessagePattern({ cmd: 'order-async' })
  async getOrderMessageAsync(name: string): Promise<string> {
    return `Order ${name} async`;
  }

  @EventPattern('order-created')
  async handleOrderCreatedEvent(data: Record<string, unknown>) {
    console.log(data);
    return JSON.stringify(data);
  }
}
