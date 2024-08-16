import { Response } from 'express';

import { Signup } from "./requests/Signup";

const SignController = {
    signup: (req: Signup, res: Response) => {
        res.json(req.email + '--' + req.password);
    },
};

export default SignController;
