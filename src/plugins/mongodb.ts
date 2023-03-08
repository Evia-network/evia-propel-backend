import fp from 'fastify-plugin'
import fastifyMongodb, { FastifyMongodbOptions } from '@fastify/mongodb'

/**
 * This plugins adds mongodb support http errors
 *
 * @see https://github.com/fastify/fastify-mongodb
 */
export default fp<FastifyMongodbOptions>(async (fastify) => {
  fastify.register(fastifyMongodb, {
    appName: 'evia-powerstake',
    database: 'powerstake',
    forceClose: true,
    url: 'mongodb://localhost:27017',
  });
});
