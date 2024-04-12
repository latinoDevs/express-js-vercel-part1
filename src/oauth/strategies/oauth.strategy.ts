import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-oauth2';
import { OAuthService } from '../oauth.service';

@Injectable()
export class OAuth2Strategy extends PassportStrategy(Strategy, 'oauth2') {
  constructor(private readonly authService: OAuthService) {
    super({
      authorizationURL: 'Actual authorization URL',
      tokenURL: 'Actual token URL',
      clientID: 'Actual client ID',
      clientSecret: 'Actual client secret',
      callbackURL: 'http://localhost:3000/auth/oauth2/callback',
    });

    this._verify = async (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback) => {
      try {
        const user = await this.authService.validateOAuthLogin(profile);
        done(null, user);
      } catch (err) {
        done(err, false);
      }
    };
  }

  private readonly _verify: (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback) => Promise<void>;

  async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<void> {
    await this._verify(accessToken, refreshToken, profile, done);
  }
  
}
