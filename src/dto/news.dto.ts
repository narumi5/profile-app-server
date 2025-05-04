import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateNewsDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  body: string;

  @IsNumber()
  @IsOptional()
  status: number;

  @IsNumber()
  @IsNotEmpty()
  userId: number;
}

export class UpdateNewsDTO {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  body: string;

  @IsNumber()
  @IsOptional()
  status: number;

  @IsNumber()
  @IsNotEmpty()
  userId: number;
}

export class DeleteNewsDTO {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
