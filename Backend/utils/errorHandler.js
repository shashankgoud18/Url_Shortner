export const errorHandler = (err, req, res, next) => {
  if(err instanceof AppError){
    return res.status(err.statusCode).json({
      success: false,
      message: err.message
    })
  }

  res.status(500).json({
    success:false,
    message: err.message || "Internal Storage Error"
  })
}

export class AppError extends Error{
    statusCode;
    isOperational

    constructor(statusCode, message, isOperational){
        super(message)
        this.statusCode = statusCode
        this.isOperational = isOperational
        Error.captureStackTrace(this, this.constructor)
    }
}

export class NotFoundError extends AppError{
    constructor(message = "Resource Not Found"){
        super(404, message, true)
    }
}

export class BadRequestError extends AppError{
    constructor(message = "Bad Request"){
        super(400, message, true)
    }
}

export class ConflictError extends AppError{
    constructor(message = "Conflict"){
        super(409, message, true)
    }
}