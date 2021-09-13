import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductModule } from '@application/module/product.module';
import { CartModule } from '@application/module/cart.module';

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
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'api_graphql_clean_architecture',
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
