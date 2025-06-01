import { UsersEntity } from '../entities/users.entity';

export type Message = {
    message: string;
  };

  export type JwtToken = {
    access_token: string;
  };

  export type JwtPayload = {
    
    email: UsersEntity['email'];
  };

  

