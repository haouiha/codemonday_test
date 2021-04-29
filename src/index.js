import * as bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import apiV1 from './controllers/v1/router';

const apiPort = process.env.PORT || 3000;

const serverBootstrap = async () => {
	const app = express();

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.use(cors());

	app.use('/api/v1', apiV1);

	app.listen(apiPort, () => console.log(`Server ready at port ${apiPort} ⭐️⭐️⭐️`));
};

serverBootstrap();
