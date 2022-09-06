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
		const server: HttpServer = createServer(app);

		// Start express server
		server.listen(env.NODE_PORT);

		server.on('listening', () => {
			logger.info(`node server is listening on port ${env.NODE_PORT} in ${env.NODE_ENV} mode`);
		});

		process.on('uncaughtException', function (exception) {
		console.log(exception); // to see your exception details in the console
		// if you are on production, maybe you can send the exception details to your
		// email as well ?
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
