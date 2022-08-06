import express, { NextFunction, Request, Response } from 'express';
import mathRoutes from './routes/math'
import routes from './routes/index';
import path from 'path'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', routes);
app.use('/math', mathRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
 res.status(404).sendFile(path.join(__dirname, 'views', 'not-found.html'))
})

app.listen(3000);
