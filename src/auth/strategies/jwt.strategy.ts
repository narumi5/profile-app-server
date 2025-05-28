import { ForbiddenException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../../users/users.service';
import { ConfigService } from '@nestjs/config';
import { JwtPayload } from '../auth.type';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
  ) {
    const secret = configService.get<string>('JWT_SECRET_KEY');
    if (!secret) {
      throw new Error(
        'JWT_SECRET_KEY is not defined in the environment variables',
      );
    }

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret,
    });
  }

  async validate({ email }: JwtPayload) {
    const user = await this.usersService.findUserByEmail(email);
    if (!user) throw new ForbiddenException();

    const { hashedPassword, ...passwordOmitUser } = user;
    return passwordOmitUser;
  }
}
