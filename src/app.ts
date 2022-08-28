import 'reflect-metadata';

// Set env variables from .env file
import { config } from 'dotenv';
config();

import express from 'express';

import { createServer, Server as HttpServer } from 'http';
import { createConnection, Connection } from 'typeorm';

import { env } from './config/globals';
import { logger } from './config/logger';

import { Server } from './api/server';
import { RedisService } from './services/redis';
import mongoose, {ConnectOptions} from "mongoose";
import cors from 'cors';
import path from 'path';

// Startup
(async function main() {
	try {
		// Connect db
		logger.info('Initializing ORM connection...');
		const connection: Connection = await createConnection();

		// Connect redis
		RedisService.connect();

		// Init express server
		const app: express.Application = new Server().app;
		app.use(cors());

// parse requests of content-type - application/json
		app.use(express.json());
		const server: HttpServer = createServer(app);

		// Connect mongo
		mongoose.connect("mongodb://207.148.18.112:27017/afrikinvest", {
			useNewUrlParser: true,
			autoIndex: true,
		  } as ConnectOptions)
		  .then((db) => {
			console.log("Database Connected Successfuly.");
		  })
		  .catch((err) => {
			console.log(err);
		  });
		// Start express server
		app.use(express.static('public'));
		
		app.get('*',(req,res)=>{
			res.sendFile(path.join(__dirname,'public/index.html'));
		})

		server.listen(env.NODE_PORT);

		server.on('listening', () => {
			logger.info(`node server is listening on port ${env.NODE_PORT} in ${env.NODE_ENV} mode`);
		});

		server.on('close', () => {
			connection.close();
			RedisService.disconnect();
			logger.info('node server closed');
		});
	} catch (err) {
		logger.error(err.stack);
	}
})();
