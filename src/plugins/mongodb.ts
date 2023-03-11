import fp from 'fastify-plugin'
import fastifyMongodb, { FastifyMongodbOptions } from '@fastify/mongodb'

/**
 * This plugins adds mongodb support
 *
 * @see https://github.com/fastify/fastify-mongodb
 */
export default fp<FastifyMongodbOptions>(async (fastify) => {
  fastify.register(fastifyMongodb, {
    appName: 'evia-propel',
    database: 'propel',
    forceClose: true,
    url: process.env.MONGO_URI ? process.env.MONGO_URI : 'mongodb://localhost:27017',
  });
});
