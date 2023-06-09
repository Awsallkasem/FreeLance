import { Model } from 'sequelize-typescript';
import { Published } from './Publish.model';
import { FreeLance } from './freeLance.model';
export declare enum UserRole {
    ADMIN = "admin",
    USER = "user",
    FreeLnce = "freelance"
}
export interface UserAttributes {
    id: number;
    role: UserRole;
    email: string;
    location: string;
    Fname: string;
    Lname: string;
    password: string;
    phone: string;
}
export declare class User extends Model<User> implements UserAttributes {
    id: number;
    role: UserRole;
    email: string;
    location: string;
    Fname: string;
    Lname: string;
    password: string;
    phone: string;
    isActive: boolean;
    isReject: boolean;
    isBlocked: boolean;
    publisheds: Published[];
    freeLances: FreeLance;
    ranks: Published[];
}
