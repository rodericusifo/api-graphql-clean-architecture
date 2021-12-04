import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductModule } from '@application/module/product.module';
import { CartModule } from '@application/module/cart.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptor } from '@application/interceptor/response.interceptor';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['src/infrastructure/assets/graphql/**/*.graphql'],
      definitions: {
        path: join(
          process.cwd(),
          'src/infrastructure/assets/graphql/graphql.schema.ts',
        ),
        outputAs: 'class',
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'ifo',
      password: '@12Maret1999',
      database: 'Api_Graphql_Clean_Architecture',
      entities: [join(__dirname, '/../../**/**.entity{.ts,.js}')],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ProductModule,
    CartModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
