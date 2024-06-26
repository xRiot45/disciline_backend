import { ZodError } from 'zod';
import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';

export class ErrorFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    if (exception instanceof HttpException) {
      response.status(exception.getStatus()).json({
        errors: exception.message,
      });
    } else if (exception instanceof ZodError) {
      response.status(400).json({
        errors: formatZodError(exception),
      });
    } else {
      response.status(500).json({
        errors: exception.message,
      });
    }
  }
}

function formatZodError(errors: ZodError) {
  return errors.errors.map((err) => {
    return {
      field: err.path.join(' > '),
      message: err.message,
    };
  });
}
