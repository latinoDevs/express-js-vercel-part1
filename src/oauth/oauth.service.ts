import { Injectable } from '@nestjs/common';
import { UserService } from './user-service/user-service';

@Injectable()
export class OAuthService {
    constructor(private readonly userService: UserService) { }

    async validateOAuthLogin(profile: any): Promise<any> {
        // Extract necessary information from the profile
        const { id, email, displayName, /* Other relevant fields */ } = profile;

        // Check if the user already exists in the database based on their email
        let user = await this.userService.findByEmail(email);

        if (!user) {
            // If the user doesn't exist, create a new user in the database
            user = await this.userService.create({
                id: id,
                email,
                displayName,
                /* Other relevant fields */
            });
        }

        // Return the user object
        return user;
    }
}
