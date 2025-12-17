import { Request, Response, NextFunction } from "express";

interface errorHandlerProps {
  err: any;
  req: Request;
  res: Response;
  next: NextFunction;
}

const errorHandler = ({ err, req, res, next }: errorHandlerProps) => {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};

export default errorHandler;
