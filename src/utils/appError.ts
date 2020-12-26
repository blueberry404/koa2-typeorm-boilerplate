export class AppError extends Error {

    statusCode: number;

    constructor(message: string | undefined, statusCode: any) {
      super(message);
      this.statusCode = statusCode;
      Error.captureStackTrace(this, this.constructor);
    }
  }