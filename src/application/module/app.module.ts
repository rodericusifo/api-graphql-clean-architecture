import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductModule } from '@application/module/product.module';
import { CartModule } from '@application/module/cart.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(
        process.cwd(),
        'src/infrastructure/config/graphql/schema.gql',
      ),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'try_graphql',
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
