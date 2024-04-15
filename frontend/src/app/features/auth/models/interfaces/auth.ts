export interface SignInDto {
  username: string;
  password: string;
}

export interface SignInResponseDto {
  access_token: string;
}

export interface RegisterDto {
  username: string;
  email: string;
  password: string;
}

export interface RegisterResponseDto {
  access_token: string;
}
