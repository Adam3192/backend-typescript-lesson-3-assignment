import {NextFunction, Request, Response, Router} from 'express';

const router = Router();

function welcome(req: Request, res: Response, next: NextFunction){
 res.send('Hello! Welcome to this site')
}

function greetUser(req: Request, res: Response, next: NextFunction){
 console.log(req.params);
 res.send(`Hello, ${req.params.name}!`);
}

router.get('/', welcome);
router.get('/greeting/:name', greetUser)

export default router;

