// auth.module.ts
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { FacebookStrategy } from './strategies/facebook.strategy';
import { GoogleStrategy } from './strategies/google.strategy';
import { UserService } from './user-service/user-service'; // Import UserService
import { OAuth2Strategy } from './strategies/oauth.strategy';
import { OAuthService } from './oauth.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'oauth2' }),
  ],
  controllers:[],
  providers: [FacebookStrategy, GoogleStrategy, OAuth2Strategy, UserService, OAuthService], // Include UserService in providers
  exports: [FacebookStrategy, GoogleStrategy, OAuth2Strategy, OAuthService], // Export the strategies
})

export class AuthModule {}
