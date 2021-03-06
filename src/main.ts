import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:true});
  app.enableCors({
    origin:["http://localhost:3000","http://localhost:8000","http://localhost:4200"]
  });
  await app.listen(8000);
}
bootstrap();
  