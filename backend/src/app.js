import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import tasksRoutes from './routes/tasks';

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi  from 'swagger-ui-express';

import { options } from './swaggerOptions';

const specs = swaggerJSDoc(options)

const app = express();

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(tasksRoutes)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs))


export default app