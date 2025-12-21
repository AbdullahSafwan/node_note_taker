import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../../config/database';
import { SignUpRequest, LogInRequest, RefreshTokenRequest, CustomJwtPayload, AuthTokens } from '../../types/authTypes';
import { userDao } from '../../dao/user';
import { userSessionDao } from '../../dao/userSession';
import { env } from '../../config/env';

const JWT_ACCESS_KEY_SECRET = env.JWT_SECRET!;
const JWT_REFRESH_KEY_SECRET = env.JWT_REFRESH_SECRET!;


const generateAccessToken = (jwtPayload: CustomJwtPayload): string => {
  try {
    return jwt.sign(jwtPayload, JWT_ACCESS_KEY_SECRET, {
      expiresIn: '60m',
    });
  } catch (error) {
    console.error('Error generating access token:', error);
    throw new Error('Failed to generate access token');
  }
};


const generateRefreshToken = (jwtPayload: CustomJwtPayload): string => {
  try {
    return jwt.sign(jwtPayload, JWT_REFRESH_KEY_SECRET, {
      expiresIn: '7d',
    });
  } catch (error) {
    console.error('Error generating refresh token:', error);
    throw new Error('Failed to generate refresh token');
  }
};


const signUpUser = async (data: SignUpRequest) => {
  try {
    // Check if user already exists
    const existingUser = await userDao.findUserByEmail(prisma, data.email);

    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Create user
    const user = await userDao.createUser(prisma, {
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      email: data.email,
      password: hashedPassword,
    });

    return user;
  } catch (error) {
    console.error('Error in signUpUser:', error);
    throw error;
  }
};


const logInUser = async (data: LogInRequest): Promise<AuthTokens> => {
  try {
    // Find user by email
    const user = await userDao.findUserByEmail(prisma, data.email);

    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Check if user is enabled
    if (user.status === 'DISABLED') {
      throw new Error('Account is disabled. Please contact support.');
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(data.password, user.password);

    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }

    // Generate JWT tokens
    const jwtPayload: CustomJwtPayload = {
      email: user.email,
      userId: user.id,
    };

    const accessToken = generateAccessToken(jwtPayload);
    const refreshToken = generateRefreshToken(jwtPayload);

    // Store refresh token in database
    await userSessionDao.createSession(prisma, user.id, refreshToken);

    // Return tokens and user data (without password)

    return {
      accessToken,
      refreshToken,
    };
  } catch (error) {
    console.error('Error in logInUser:', error);
    throw error;
  }
};


const refreshAccessToken = async (data: RefreshTokenRequest): Promise<{ accessToken: string }> => {
  try {
    // Check if refresh token exists in database
    const session = await userSessionDao.findSessionByToken(prisma, data.refreshToken);

    if (!session) {
      throw new Error('Invalid refresh token');
    }

    // Verify refresh token signature
    let decoded: any;
    try {
      decoded = jwt.verify(data.refreshToken, JWT_REFRESH_KEY_SECRET);
    } catch (error) {
      console.error('JWT verification failed:', error);
      throw new Error('Invalid or expired refresh token');
    }

    // Validate payload
    if (!decoded || !decoded.email || !decoded.userId) {
      throw new Error('Invalid token payload');
    }

    // Generate new access token
    const jwtPayload: CustomJwtPayload = {
      email: decoded.email,
      userId: decoded.userId,
    };

    const accessToken = generateAccessToken(jwtPayload);

    return { accessToken };
  } catch (error) {
    console.error('Error in refreshAccessToken:', error);
    throw error;
  }
};


const logOut = async (data: RefreshTokenRequest) => {
  try {
    // Delete session from database
    const result = await userSessionDao.deleteSessionByToken(prisma, data.refreshToken);
    return result;
  } catch (error) {
    console.error('Error in logOut:', error);
    throw error;
  }
};

// Export all auth service functions as a single object
const authService = {
  signUpUser,
  logInUser,
  refreshAccessToken,
  logOut,
};

export default authService;
