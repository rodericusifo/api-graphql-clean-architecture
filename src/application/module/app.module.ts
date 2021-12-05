import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductModule } from '@application/module/product.module';
import { CartModule } from '@application/module/cart.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseType } from '@application/type/database.type';
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
    ConfigModule.forRoot({
      envFilePath: 'environment/.env',
    }),
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as DatabaseType,
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
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
