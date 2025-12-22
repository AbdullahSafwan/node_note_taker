import { Request, Response } from 'express';
import authService from '../services/auth';
import { SignUpRequest, LogInRequest, RefreshTokenRequest } from '../types/authTypes';
import { sendSuccessResponse, sendErrorResponse } from '../utils/responseHelper';
import { debugLog } from '../utils/helper';

/**
 * Sign Up Controller
 */
export const signUp = async (
  req: Request<Record<string, never>, unknown, SignUpRequest>,
  res: Response
) => {
  try {
    const data = req.body;
    const user = await authService.signUpUser(data);

    sendSuccessResponse(res, 201, 'User registered successfully', user);
  } catch (error) {
    debugLog(error);
    sendErrorResponse(res, 400, 'Registration failed', error);
  }
};

/**
 * Log In Controller
 */
export const logIn = async (
  req: Request<Record<string, never>, unknown, LogInRequest>,
  res: Response
) => {
  try {
    const data = req.body;
    const result = await authService.logInUser(data);

    sendSuccessResponse(res, 200, 'Login successful', result);
  } catch (error) {
    debugLog(error);
    sendErrorResponse(res, 401, 'Login failed', error);
  }
};

/**
 * Refresh Token Controller
 */
export const refreshToken = async (
  req: Request<Record<string, never>, unknown, RefreshTokenRequest>,
  res: Response
) => {
  try {
    const data = req.body;
    const result = await authService.refreshAccessToken(data);

    sendSuccessResponse(res, 200, 'Token refreshed successfully', result);
  } catch (error) {
    debugLog(error);
    sendErrorResponse(res, 401, 'Token refresh failed', error);
  }
};

/**
 * Log Out Controller
 */
export const logOut = async (
  req: Request<Record<string, never>, unknown, RefreshTokenRequest>,
  res: Response
) => {
  try {
    const data = req.body;
    if (!data.refreshToken) {
      throw new Error('Refresh token is required for logout');
    }
    await authService.logOut(data);

    sendSuccessResponse(res, 200, 'Logout successful');
  } catch (error) {
    debugLog(error);
    sendErrorResponse(res, 400, 'Logout failed', error);
  }
};

// Export all controller functions as a single object
const authController = {
  signUp,
  logIn,
  refreshToken,
  logOut,
};

export default authController;
