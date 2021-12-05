import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  statusCode: number;
  message: string;
  data: T;
  meta: {
    count: number;
    page: number;
  };
  status: string;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        const response = {
          statusCode: context.switchToHttp().getResponse().statusCode
            ? context.switchToHttp().getResponse().statusCode
            : data.statusCode,
          message: data.message,
          data: data.result,
          meta: data.meta,
          status:
            context.switchToHttp().getResponse().statusCode === 201 ||
            data.statusCode === 201
              ? 'Created'
              : 'OK',
        };

        for (const key in response) {
          if (!response[key]) {
            delete response[key];
          }
        }

        return response;
      }),
    );
  }
}
