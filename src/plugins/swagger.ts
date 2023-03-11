import fp from 'fastify-plugin'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'

/**
 * This plugins adds support for swagger and swaggerUI
 *
 * @see https://github.com/fastify/fastify-swagger
 * @see https://github.com/fastify/fastify-swagger-ui
 */
export default fp(async (fastify) => {
  fastify.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'Evia Propel API',
        description: 'Evia Propel API documentation',
        version: '0.1.0',
      },
    },
  });

  fastify.register(fastifySwaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'list',
      deepLinking: false
    },
  });
})
