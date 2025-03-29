import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTodoDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  done: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}

export class UpdateTodoDTO {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  done: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}

  export class DeleteTodoDTO {
    @IsNumber()
    @IsNotEmpty()
    id: number;
  
    
}
