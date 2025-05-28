import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import type { JwtToken, Message } from './auth.type';
import type { PasswordOmitUser } from '../users/users.type';
import { LocalGuard } from './guards/local.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto): Promise<Message> {
    return this.authService.signup(dto);
  }

  @Post('login')
  @UseGuards(LocalGuard)
  login(
    @Body() dto: AuthDto,
    @Request() req: { user: PasswordOmitUser },
  ): Promise<JwtToken> {
    return this.authService.login(req.user);
  }
}