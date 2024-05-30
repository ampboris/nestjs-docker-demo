import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello Docker @ ${(new Date()).toLocaleString()}`;
  }
}
