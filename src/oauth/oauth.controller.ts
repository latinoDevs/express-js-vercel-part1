// auth.controller.ts

import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleLogin(){}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleLoginCallback(@Req() req, @Res() res) {
    // Redirige al usuario a la página de inicio después de la autenticación
    res.redirect('/');
  }
  @Get('facebook')
  @UseGuards(AuthGuard('facebook'))
  async facebookAuth() {}

  @Get('facebook/callback')
  @UseGuards(AuthGuard('facebook'))
  async facebookAuthRedirect(@Req() req) {
    return {
      statusCode: 200,
      data: req.user,
    };
  }
  @Get('test')
  //@UseGuards(AuthGuard('facebook'))
  async test(@Req() req) {
    return {
      statusCode: 200,
      data: req.user,
    };
  }
}
