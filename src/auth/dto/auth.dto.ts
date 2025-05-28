import {
    IsEmail,
    IsNotEmpty,
    IsString,
    MinLength,
    MaxLength,
  } from 'class-validator';
  
  export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;
  
    @IsString()
    @MinLength(8)
    @MaxLength(24)
    @IsNotEmpty()
    password: string;
  }