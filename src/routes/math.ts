import {NextFunction, Request, Response, Router} from 'express';

const router = Router();

function add(req: Request, res: Response, next: NextFunction){
 res.send(`${req.params.num1} + ${req.params.num2} = ${parseInt(req.params.num1) + parseInt(req.params.num2)}`)
}

function generateNumber(req: Request, res: Response, next: NextFunction){
 var randomNumber = Math.ceil(Math.random() * 50);
 res.send(`Random whole number between 1 and 50 : ${randomNumber}`);
}

router.get('/add/:num1/:num2', add);
router.get('/random', generateNumber)

export default router;

