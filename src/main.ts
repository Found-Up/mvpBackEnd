import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { APIPrefix } from './constant/common';
import 'reflect-metadata'; //Keep in mind that the reflect-metadata shim is a polyfill,
//and it is not needed in environments that already have the Reflect API available, such as modern browsers.
//You can check if the Reflect API is available by checking the value of typeof Reflect.
/*
if (typeof Reflect === 'undefined') {
  import 'reflect-metadata';
}*/
import { SpelunkerModule } from 'nestjs-spelunker';
import * as util from 'util';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(APIPrefix.Version);
  app.enableCors();
  const port = process.env.SERVER_PORT;
  await app.listen(port);
  // comment out below for checking out DI
  // console.log(
  //   util.inspect(SpelunkerModule.explore(app), {
  //     depth: Infinity,
  //     colors: true,
  //   }),
  // );
  // const tree = SpelunkerModule.explore(app);
  // const root = SpelunkerModule.graph(tree);
  // const edges = SpelunkerModule.findGraphEdges(root);
  // console.log('graph LR');
  // const mermaidEdges = edges.map(
  //   ({ from, to }) => `  ${from.module.name}-->${to.module.name}`,
  // );
  // console.log(mermaidEdges.join('\n'));
}
bootstrap();
