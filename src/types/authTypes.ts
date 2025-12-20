export interface SignUpRequest {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
}

export interface LogInRequest {
  email: string;
  password: string;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface CustomJwtPayload {
  email: string;
  userId: number;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}
