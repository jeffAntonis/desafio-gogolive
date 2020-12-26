import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return { version: '1.0.0', message: 'Desafio Go Go Live' };
  }
}
