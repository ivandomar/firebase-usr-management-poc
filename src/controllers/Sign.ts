import { Response } from 'express';

import { Signup } from "./requests/Signup";
import AuthService from '../services/Auth';
import DataStorageService from '../services/DataStorage';
import { error } from 'console';

const SignController = {
    signup: async (req: Signup, res: Response) => {
        try {
            const { user } = await AuthService.signup(req.email, req.password);

            if (!user) {
                throw Error('User has not defined an email');
            } else {
                await DataStorageService.store('Users',  { email: req.email });
            }

        } catch (error) {
            console.error(error);
        }
    },
};

export default SignController;
