//user.service

import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserService {
    private readonly users: User[] = [];

    // Method to find a user by email
    async findByEmail(email: string): Promise<User | undefined> {
        return this.users.find(user => user.email === email);
    }

    // Method to find a user by ID
    async findById(id: string): Promise<User | undefined> {
        return this.users.find(user => user.id === id);
    }

    // Method to create a new user
    async create(user: User): Promise<User> {
        this.users.push(user);
        return user;
    }

    // Method to update an existing user
    async update(id: string, updateUserDto: Partial<User>): Promise<User | undefined> {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            this.users[index] = { ...this.users[index], ...updateUserDto };
            return this.users[index];
        }
        return undefined; // Return undefined if the user is not found
    }

    // Method to delete a user by ID
    async delete(id: string): Promise<void> {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            this.users.splice(index, 1);
        }
    }

    // Method to retrieve all users
    async findAll(): Promise<User[]> {
        return this.users;
    }
}

