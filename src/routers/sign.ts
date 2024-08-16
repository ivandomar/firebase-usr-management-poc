import express from 'express';

const signRouter = express.Router();

signRouter.route('/sign/up').post((req, res) => res.send('Signup!'));
signRouter.route('/sign/in').post((req, res) => res.send('Signin!'));

export default signRouter;
