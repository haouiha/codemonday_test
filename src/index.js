import * as bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import api from './router';

dotenv.config();

const apiPort = process.env.PORT || 3000;

const serverBootstrap = async () => {
	const app = express();

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.use(cors());

	app.use('/api', api);

	app.listen(apiPort, () => console.log(`Server ready at port ${apiPort} ⭐️⭐️⭐️`));
};

serverBootstrap();
