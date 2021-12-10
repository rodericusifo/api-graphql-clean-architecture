import { AllExceptionsFilter } from '@application/filter/exception.filter';
import { TransformInterceptor } from '@application/interceptor/response.interceptor';
import { AppModule } from '@application/module/app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory, Reflector } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalInterceptors(
    new TransformInterceptor(),
    new ClassSerializerInterceptor(app.get(Reflector)),
  );
  app.useGlobalFilters(new AllExceptionsFilter(app.get(HttpAdapterHost)));
  app.enableCors();
  await app.listen(process.env.APP_PORT || 3000);
}
bootstrap();
