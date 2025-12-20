import { Router } from 'express';
import { authValidator } from "../middleware/validator/authValidator";
import authController from '../controllers/auth';
import { throwValidationResult } from '../utils/helper';

const router = Router();

/**
 * @route   POST /auth/signup
 * @desc    Register a new user
 * @access  Public
 */
router.post('/signup', authValidator.signUpValidator, throwValidationResult, authController.signUp);

/**
 * @route   POST /auth/login
 * @desc    Login user
 * @access  Public
 */
router.post('/login', authValidator.logInValidator, throwValidationResult, authController.logIn);

/**
 * @route   POST /auth/refresh
 * @desc    Refresh access token
 * @access  Public
 */
router.post('/refresh', authController.refreshToken);

/**
 * @route   DELETE /auth/logout
 * @desc    Logout user
 * @access  Public
 */
router.delete('/logout', authController.logOut);

export default router;
