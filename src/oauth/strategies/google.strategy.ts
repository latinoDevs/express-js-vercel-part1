// google.strategy.ts

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: 'your-client-id',
      clientSecret: 'your-client-secret',
      callbackURL: 'http://localhost:3000/auth/google/callback', // URL de redireccionamiento después de la autenticación
      scope: ['email', 'profile'], // Ámbito de acceso solicitado
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
    // La lógica de validación del usuario, por ejemplo, buscar o crear un usuario en la base de datos
    const user = {
      id: profile.id,
      email: profile.emails[0].value,
      name: profile.displayName,
      // Otros campos del perfil según sea necesario
    };
    done(null, user);
  }
}
