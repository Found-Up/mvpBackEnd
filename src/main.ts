import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata"; //Keep in mind that the reflect-metadata shim is a polyfill, 
//and it is not needed in environments that already have the Reflect API available, such as modern browsers. 
//You can check if the Reflect API is available by checking the value of typeof Reflect. 
/*
if (typeof Reflect === 'undefined') {
  import 'reflect-metadata';
}*/


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
