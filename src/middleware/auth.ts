import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { CustomJwtPayload } from '../types/authTypes';
import { sendErrorResponse } from '../utils/responseHelper';

const JWT_ACCESS_KEY_SECRET = process.env.JWT_ACCESS_KEY_SECRET!;

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    // Extract token from Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return sendErrorResponse(res, 401, 'Authorization header missing');
    }

    // Bearer <token>
    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      return sendErrorResponse(res, 401, 'Invalid token format');
    }

    const token = parts[1];

    // Verify token
    const decoded = jwt.verify(token, JWT_ACCESS_KEY_SECRET) as CustomJwtPayload;

    // Validate payload
    if (!decoded || !decoded.email || !decoded.userId) {
      return sendErrorResponse(res, 401, 'Invalid token payload');
    }

    // Attach user to request
    req.user = decoded;
    next();
  } catch (error) {
    return sendErrorResponse(res, 401, 'Forbidden', error instanceof Error ? error.message : 'Invalid token');
  }
};
