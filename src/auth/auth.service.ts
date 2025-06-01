import { ConflictException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { type AuthDto } from './dto/auth.dto';
import type { JwtPayload, JwtToken, Message } from './auth.type';
import type { PasswordOmitUser } from '../users/users.type';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signup({ email, password }: AuthDto): Promise<Message> {
    const hashedPassword = await bcrypt.hash(password, 12);
    const existingUser = await this.usersService.findUserByEmail(email);
    if (existingUser) {
      throw new ConflictException('このメールアドレスは既に使われています');
    }
    try {
      await this.usersService.createOne({ email, hashedPassword });
      return { message: 'Signup was successful' };
    } catch (e) {
      if (e.code === '23505') {
        throw new ConflictException('This email is already taken');
      }
      throw e;
    }
  }

  async validateUser({
    email,
    password,
  }: AuthDto): Promise<PasswordOmitUser | null> {
    const user = await this.usersService.findUserByEmail(email);

    if (!user) return null;

    const isValidPassword = await bcrypt.compare(password, user.hashedPassword);

    if (isValidPassword === false) return null;

    const { hashedPassword, ...passwordOmitUser } = user;
    return passwordOmitUser as PasswordOmitUser;
  }

  async login({ email: email }: PasswordOmitUser): Promise<JwtToken> {
    const payload: JwtPayload = { email:  email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
