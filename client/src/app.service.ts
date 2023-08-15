import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('ORDER_SERVICE') private client: ClientProxy) {}
  getOrder() {
    return this.client.send({ cmd: 'order' }, 'Order Message');
  }
  async getOrderAsync() {
    const message = await this.client.send(
      { cmd: 'order-async' },
      'Order Async Message',
    );
    return message;
  }
  async publishEvent() {
    const product = {
      productName: 'Test Product',
      price: 100,
    };
    this.client.emit('order-created', product);
    return product;
  }
}
