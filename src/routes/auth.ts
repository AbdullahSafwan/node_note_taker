import { Router } from 'express';
import authController from '../controllers/auth';

const router = Router();

/**
 * @route   POST /auth/signup
 * @desc    Register a new user
 * @access  Public
 */
router.post('/signup', authController.signUp);

/**
 * @route   POST /auth/login
 * @desc    Login user
 * @access  Public
 */
router.post('/login', authController.logIn);

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
