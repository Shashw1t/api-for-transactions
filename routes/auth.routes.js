import { Router } from 'express';

const authRouter = Router();

authRouter.post('/sign-up', (req, res) => res.send({title : 'sign-up route'}));
authRouter.post('/sign-in', (req, res) => res.send({title : 'sign-in route'}));
authRouter.post('/sign-out', (req, res) => res.send({title : 'sign-out route'}));

export default authRouter;

