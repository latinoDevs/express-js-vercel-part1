import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('app')
  @UseGuards(AuthGuard('oauth'))
  exampleRoute() {
    return this.appService.getHello();
    // Esta ruta requerirá autenticación OAuth
  }

  @Get('signin')
  signIn(): string {
    return this.appService.getHello();
  }
  
}
