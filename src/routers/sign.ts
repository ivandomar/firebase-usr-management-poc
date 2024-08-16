import express from 'express';

import SignController from '../controllers/Sign';
import { Signup } from '../controllers/requests/Signup';

const signRouter = express.Router();

signRouter.route('/sign/up').post((req, res) => SignController.signup(req.body as Signup, res));
signRouter.route('/sign/in').post((req, res) => res.send('Signin!'));

export default signRouter;
