import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDTO {
  // @IsString()
  // @IsNotEmpty()
  // firstName: string;

  // @IsString()
  // @IsNotEmpty()
  // lastName: string;

  // @IsNumber()
  // @IsNotEmpty()
  // age: number;

  // @IsBoolean()
  // @IsNotEmpty()
  // isActive: boolean;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  hashedPassword :string;
}

export class UpdateUserDTO {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;

  
}
