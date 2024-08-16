import { Request } from 'express';

export interface Signup extends Request {
    email: string;
    password: string;
};
