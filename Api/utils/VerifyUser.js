import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken = (req, res, next) => {
  // Check for token in cookies or Authorization header
  const token = req.cookies.access_token || req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return next(errorHandler(401, 'Unauthorized'));
  }

  // Verify token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.error('Token verification failed:', err.message);
      return next(errorHandler(403, 'Forbidden'));
    }

    // Attach the user object to the request
    req.user = user;

    // Proceed to the next middleware
    next();
  });
};
